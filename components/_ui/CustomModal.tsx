import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactNode } from "react";
import { MdError } from "react-icons/md";
import { GiBigEgg } from "react-icons/gi";
import { useTheme } from "@mui/material/styles";
import { PiShieldWarningFill } from "react-icons/pi";
import { Modal as ModalType } from "@/types";
import { CSSObject } from "@mui/material";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "40%",
  maxHeight: "80vh",
  boxShadow: 5,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  overflow: "scroll",
};

interface Props {
  modal: ModalType;
  children?: ReactNode | false;
  boxStyle?: CSSObject;
  closeFn?: () => void;
  icon?: boolean;
}

const marginBottom = 5;
const CustomModal = ({
  children = false,
  boxStyle,
  closeFn,
  icon = true,
  modal,
}: Props) => {
  const theme = useTheme();

  const handleClose = () => closeFn();

  const TYPE_MAP = {
    error: (
      <MdError style={{ color: theme.palette.error.main, marginBottom }} />
    ),
    success: (
      <GiBigEgg style={{ color: theme.palette.success.main, marginBottom }} />
    ),
    warning: (
      <PiShieldWarningFill
        style={{ color: theme.palette.warning.main, marginBottom }}
      />
    ),
  };

  return (
    <>
      <Modal open={modal.status} onClose={handleClose}>
        <Box
          sx={{
            ...style,
            backgroundColor: "background.default",
            color: "primary.contrastText",
            ...(boxStyle && {
              ...boxStyle,
            }),
          }}
        >
          {icon && TYPE_MAP[modal.type]}
          {children || modal.text}
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
