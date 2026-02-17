"use client";
import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

const localeText = {
  cancelButtonLabel: "İptal",
  okButtonLabel: "Tamam",
  toolbarTitle: "Saat Seç",
};

interface Props {
  time: unknown;
  setTime: (time: unknown) => void;
  disabledHours?: number[];
}

const CustomTimePicker = ({ time, setTime, disabledHours }: Props) => {
  const handleTimeChange = (newValue) => {
    setTime(moment(newValue?._d));
  };

  const shouldDisableTime = (timeValue, clockType) => {
    if (clockType === "hours" && !isEmpty(disabledHours)) {
      const hour = timeValue.hour();
      return disabledHours.includes(hour);
    }
    return false;
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
          orientation="landscape"
          localeText={localeText}
          label={"Randevu Saati"}
          value={time}
          onChange={handleTimeChange}
          shouldDisableTime={shouldDisableTime}
        />
      </LocalizationProvider>
    </>
  );
};

export default CustomTimePicker;
