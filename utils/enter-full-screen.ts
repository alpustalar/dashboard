"use client";
export const enterFullScreen = async (): Promise<boolean> => {
  if (typeof document === "undefined") return false;

  if (document.fullscreenElement) return false;

  try {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      await elem.requestFullscreen();
      return true;
    }

    return false;
  } catch (error) {
    console.error("enterFullScreen error:", error);
    return false;
  }
};
