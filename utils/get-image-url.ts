const { NEXT_PUBLIC_SERVER_URL: SERVER_ORIGIN } = process.env;

type StaticImageFunctionType = (url: string, splitText?: string) => string;

const GetImageUrl: StaticImageFunctionType = (url = null, splitText = null) => {
  if (!url) {
    return null;
  }

  if (splitText) {
    const splitItem = url?.split(splitText)[1];
    return `${SERVER_ORIGIN}${splitItem}`;
  }

  return `${SERVER_ORIGIN}${url}`;
};

export default GetImageUrl;
