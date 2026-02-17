"use client";
import { Fade, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FC, useEffect, useRef, useState } from "react";
import { range } from "lodash";
import Typography from "@mui/material/Typography";
import CustomModal from "@/components/ui/CustomModal";

const bgDefault = "rgb(20,26,33)";
const bgTransparent = "rgba(20,26,33,0.34)";

interface CustomSliderPropTypes {
  data: object[];
  index: number;
  next: () => void;
  prev: () => void;
}

const CustomSlider: FC<CustomSliderPropTypes> = ({
  data,
  index,
  next,
  prev,
}) => {
  const intervalRef = useRef(null);

  const modalInitialState = {
    status: false,
    text: null,
  };
  const [modalObj, setModalObj] = useState(modalInitialState);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => next(), 6000);
  };

  useEffect(() => {
    resetInterval();

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNext = () => {
    next();
    resetInterval();
  };

  const handlePrev = () => {
    prev();
    resetInterval();
  };

  const dots = range(0, 3);

  const handleOpenModal = (item) => (event) => {
    event.stopPropagation();
    setModalObj({ text: item.content, status: true });
  };

  return (
    <>
      {data?.map((item, i) => {
        return (
          index === i && (
            <Fade in={true} timeout={1000} key={i}>
              <Stack
                key={i}
                sx={{
                  background: `linear-gradient(to top, ${bgDefault} 25%, 
                                    ${bgTransparent}), url(${
                                      // @ts-expect-error some
                                      item?.imageUrl
                                    })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "38vh",
                  borderRadius: 3,
                  position: "relative",
                  justifyContent: "flex-end",
                  px: 4,
                  py: 1,
                }}
              >
                <Stack
                  onClick={handleOpenModal(item)}
                  sx={{ cursor: "pointer" }}
                >
                  <Typography
                    variant={"overline"}
                    fontWeight={"bold"}
                    sx={{
                      color: "primary.customColor.light",
                      transition: "all .4s ease",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {
                      // @ts-expect-error some
                      item?.title
                    }
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    {// @ts-expect-error some
                    item?.content.slice(0, 50)}
                    ...
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    m: 1,
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    columnGap={1}
                    marginLeft={2}
                  >
                    {dots?.map((item, i) => {
                      const wh = i === index ? 9 : 8;
                      return (
                        <Stack
                          key={i}
                          sx={{
                            width: wh,
                            height: wh,
                            borderRadius: "100%",
                            transition: "all .4s ease",
                            backgroundColor:
                              i === index
                                ? "primary.customColor.light"
                                : "primary.customColor.dark",
                          }}
                        ></Stack>
                      );
                    })}
                  </Stack>

                  <Stack direction="row" columnGap={1}>
                    <IconButton onClick={handlePrev}>
                      <MdKeyboardArrowLeft />
                    </IconButton>
                    <IconButton onClick={handleNext}>
                      <MdKeyboardArrowRight />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            </Fade>
          )
        );
      })}
      {/************************************************* MODAL START ************************************************/}
      <CustomModal
        state={modalObj.status}
        closeFunction={() => setModalObj(modalInitialState)}
      >
        {modalObj?.text}
      </CustomModal>
      {/*!******************************************** MODAL END **************************************************/}
    </>
  );
};

export default CustomSlider;
