export const formDataAppend = (
  textFields: Record<string, unknown>,
  file: { file: Blob },
) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(textFields)) {
    if (typeof value === "string") {
      formData.append(key, value);
    }
  }
  formData.append("file", file.file);
  return formData;
};

export const formDataAppendMultiple = (
  textFields: Record<string, unknown>,
  files: { file: Blob }[],
) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(textFields)) {
    if (typeof value === "string") {
      formData.append(key, value);
    }
  }
  files.forEach((file) => formData.append("files", file.file));
  return formData;
};
