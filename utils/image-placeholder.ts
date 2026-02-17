const imagePlaceholder = (image: string | null | undefined | false): string => {
  return image || "/placeholders/profile-picture.webp";
};

export default imagePlaceholder;
