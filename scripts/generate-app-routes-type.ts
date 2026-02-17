import fs from "fs";
import path from "path";
import { asyncHandler } from "@/utils/async-handler";

const appDir = path.join(process.cwd(), "app", "[locale]");

const folders = fs
  .readdirSync(appDir, { withFileTypes: true })
  .filter(
    (dirent) =>
      dirent.isDirectory() &&
      !dirent.name.startsWith("(") && // route groups
      !dirent.name.startsWith("_") && // private
      !dirent.name.startsWith("."),
  )
  .map((dirent) => dirent.name);

const appRoutes = {
  type: {
    outputFilePath: path.join(
      process.cwd(),
      "types",
      "contract",
      "app-routes.ts",
    ),
    content: `
import { AppRoutes } from "@/constants/navigation-routes";
export type AppRoute = (typeof AppRoutes)[number];
`,
  },
  constant: {
    outputFilePath: path.join(
      process.cwd(),
      "constants",
      "navigation-routes.ts",
    ),
    content: `export const AppRoutes = [${folders.map((folder) => `"${folder}"`)}] as const;`,
  },
};

const typesIndex = {
  outputFilePath: path.join(process.cwd(), "types", "index.ts"),
  content: `
//** app routes
export * from "./contract/app-routes"`,
};

const writeNavRoutes = async () => {
  const [, asyncError] = await asyncHandler(
    fs.promises.writeFile(
      appRoutes.constant.outputFilePath,
      appRoutes.constant.content,
      "utf8",
    ),
  );

  if (asyncError) console.error(asyncError);
};

const writeAppRoutesType = async () => {
  const [, e] = await asyncHandler(
    fs.promises.writeFile(
      appRoutes.type.outputFilePath,
      appRoutes.type.content.trim() + "\n",
    ),
  );
  if (e) console.error(e);
};

const writeTypesIndex = async () => {
  const [, e] = await asyncHandler(
    (async () => {
      let prevIndexContent = "";
      if (fs.existsSync(typesIndex.outputFilePath)) {
        prevIndexContent = fs.readFileSync(typesIndex.outputFilePath, "utf-8");
      }
      if (!prevIndexContent.includes(typesIndex.content)) {
        await fs.promises.appendFile(
          typesIndex.outputFilePath,
          typesIndex.content,
        );
        console.log("✅ contract export added to index.ts");
      } else {
        console.log("ℹ️ contract export already exists in index.ts");
      }
    })(),
  );

  if (e) console.error(e);
};

const write = async () => {
  const [, e] = await asyncHandler(
    (async () => {
      await writeNavRoutes();
      await writeAppRoutesType();
      await writeTypesIndex();
    })(),
  );

  if (e) console.error(e);
};

const [, e] = await asyncHandler(write());
if (e) console.error(e);
