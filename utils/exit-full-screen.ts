"use client";
export const exitFullScreen = async (): Promise<boolean | void> => {
  if (typeof document === "undefined") {
    return false;
  }

  if (!document.fullscreenElement) {
    return false;
  }

  try {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
    }
    return false;
  } catch (error) {
    console.error("Failed to exit fullscreen:", error);
    return false;
  }
};
