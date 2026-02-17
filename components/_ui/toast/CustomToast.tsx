import { toast } from "react-hot-toast";
import { useTheme } from "@mui/material/styles";

interface CustomToast {
  (text: string, error?: boolean, theme?: "dark" | "light"): void;
}

const CustomToast: CustomToast = (text: string, error: boolean = false) => {
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const style = {
    fontFamily: "'System UI', sans-serif",
    padding: "10px",
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
  };

  toast[error ? "error" : "success"](text, {
    position: "top-center",
    duration: 5000,
    style: style,
  });
};

export default CustomToast;
