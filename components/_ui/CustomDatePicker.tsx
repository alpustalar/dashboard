import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Stack, SxProps } from "@mui/material";
import StyledCalendar from "@/components/ui/emotion-styled/StyledCalendar";
import { Dispatch, FC, SetStateAction } from "react";

interface CustomDatePickerProps {
  label: string;
  date: Date | Date[];
  setDate: Dispatch<SetStateAction<Date | Date[]>>;
  wrapperStyle?: SxProps;
  ranged: boolean;
  maxDate?: Date;
  minDate?: Date;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  label,
  date,
  setDate,
  wrapperStyle,
  ranged = true,
  maxDate,
  minDate,
}) => {
  const theme = useTheme();

  const handleDateChange = (newDate, event) => {
    event.stopPropagation();
    setDate(newDate);
  };

  return (
    <Stack
      gap={1}
      // @ts-expect-error some
      style={{ ...wrapperStyle }}
    >
      <Typography variant="overline" pl={1}>
        {label}
      </Typography>
      <StyledCalendar
        selectRange={ranged}
        onChange={handleDateChange}
        // @ts-expect-error some
        value={date}
        theme={theme}
        minDate={minDate ?? null}
        maxDate={maxDate ?? new Date()}
      />
    </Stack>
  );
};

export default CustomDatePicker;
