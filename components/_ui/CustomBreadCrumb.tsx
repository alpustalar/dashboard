"use client";
import IconButton from "@mui/material/IconButton";
import { MdKeyboardReturn } from "react-icons/md";
import Typography from "@mui/material/Typography";
import { IoMdArrowDropright } from "react-icons/io";
import { Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface DocumentBreadCrumbPropTypes {
  label: string;
  parentLabel?: string;
  parentHref?: string;
}

const DocumentBreadCrumb: FC<DocumentBreadCrumbPropTypes> = ({
  parentHref,
  parentLabel,
  label,
}) => {
  const router = useRouter();

  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton color="error" onClick={() => router.back()}>
          <MdKeyboardReturn />
        </IconButton>
        {parentLabel &&
          (parentHref ? (
            <Link href={parentHref} replace={false} scroll={false}>
              <Typography
                pl={2}
                sx={{ color: "text.primary" }}
                variant="overline"
              >
                {parentLabel}
              </Typography>
            </Link>
          ) : (
            <Typography
              pl={2}
              sx={{ color: "text.primary" }}
              variant="overline"
            >
              {parentLabel}
            </Typography>
          ))}
        <IoMdArrowDropright />
        <Typography variant="overline" fontWeight={700}>
          {label}
        </Typography>
      </Stack>
    </>
  );
};

export default DocumentBreadCrumb;
