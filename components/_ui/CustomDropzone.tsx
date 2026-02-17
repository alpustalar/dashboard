import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { SlCloudUpload } from "react-icons/sl";
import { BiXCircle } from "react-icons/bi";
import styles from "./customDropzone.module.scss";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

interface CustomDropzoneProps {
  width?: string | number;
  height?: string | number;
  prevUrls: Array<{ url: string }>;
  setPrevUrls: Dispatch<SetStateAction<Array<{ url: string }>>>;
  setFiles: Dispatch<SetStateAction<Array<{ file: File }>>>;
  textColor?: string;
  borderColor?: string;
  initialText?: string;
  dragActiveText?: string;
  maxFiles?: number;
  accept?: Accept;
}

const acceptTypes: Accept = {
  "image/*": [".jpeg", ".png", ".jpg", ".gif", ".bmp"],
};
const CustomDropzone: FC<CustomDropzoneProps> = ({
  width,
  height,
  setFiles,
  prevUrls,
  setPrevUrls,
  borderColor,
  textColor,
  initialText,
  dragActiveText,
  maxFiles,
  accept = acceptTypes,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      setFiles((files) => [...files, { file }]);
      setPrevUrls((prev) => [...prev, { url: URL.createObjectURL(file) }]);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept,
    maxFiles: maxFiles ?? 4,
    maxSize: 1024 * 1024 * 6, // 6MB
    multiple: true,
  });

  const theme = useTheme();

  const handleDelete = (e: React.MouseEvent, key: number) => {
    e.stopPropagation();
    setPrevUrls((urls) => urls.filter((_, index) => index !== key));
    setFiles((files) => files.filter((_, index) => index !== key));
  };

  const primaryColor = theme.palette?.text?.primary;

  return (
    <div
      {...getRootProps()}
      style={{
        width: width ?? "100%",
        height: height ?? "100%",
        border: `2px dashed ${borderColor ?? primaryColor}`,
      }}
      className={styles.container}
    >
      <input {...getInputProps()} />
      <SlCloudUpload
        fontSize={50}
        color={textColor || primaryColor}
        style={{
          top: prevUrls.length > 0 ? "40%" : "20%",
        }}
        className={styles.slcloud}
      />
      <div
        style={{
          top: prevUrls.length > 0 ? "15%" : "55%",
        }}
        className={styles.dragActive}
      >
        {isDragActive ? (
          <p style={{ color: textColor || primaryColor }}>
            {dragActiveText || "Buraya bırakın ..."}
          </p>
        ) : (
          <>
            <p style={{ color: textColor || primaryColor }}>
              {initialText ||
                "Dosyalarınızı buraya sürükleyip bırakabilirsiniz"}{" "}
            </p>
            {!initialText && (
              <p
                style={{ color: textColor || primaryColor, fontWeight: "bold" }}
              >
                ya da Tıklayın
              </p>
            )}
          </>
        )}
      </div>
      <div className={styles.prevUrls}>
        {prevUrls.map((value, key) => (
          <div key={key} style={{ position: "relative" }}>
            <Image
              src={value?.url}
              alt={"key"}
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />

            <BiXCircle
              onClick={(e) => handleDelete(e, key)}
              style={{
                color: "red",
                position: "absolute",
                fontSize: 18,
                top: -8,
                right: -7,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropzone;
