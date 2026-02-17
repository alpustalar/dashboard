import localFont from "next/font/local";

export const publicSans = localFont({
  src: [
    {
      path: "../../../public/fonts/publicsans/PublicSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/publicsans/PublicSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/publicsans/PublicSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/publicsans/PublicSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/publicsans/PublicSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const nunito = localFont({
  src: [
    {
      path: "../../../public/fonts/nunito/Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nunito/Nunito-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nunito/Nunito-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nunito/Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nunito/Nunito-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nunito/Nunito-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nunito/Nunito-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nunito/Nunito-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../public/fonts/nunito/Nunito-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/nunito/Nunito-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});
