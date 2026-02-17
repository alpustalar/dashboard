import fs from "fs/promises";
import { existsSync, mkdirSync } from "fs";
import path from "path"; // @ts-expect-error
import messages from "../locales/index.ts";
import { asyncHandler } from "@/utils/async-handler";

const outputDir = path.join(process.cwd(), "locales", "json");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}
const [, asyncError] = await asyncHandler(
  (async () => {
    await fs.writeFile(
      path.join(outputDir, "tr.json"),
      JSON.stringify(messages.tr, null, 2),
      "utf-8",
    );

    await fs.writeFile(
      path.join(outputDir, "en.json"),
      JSON.stringify(messages.en, null, 2),
      "utf-8",
    );

    return "success";
  })(),
);

if (asyncError) {
  console.error("❌ Yazma hatası:", asyncError);
} else {
  console.log(
    "✅ Yerelleştirme dosyaları başarıyla oluşturuldu: /locales/json/*.json",
  );
}
