import { CSSProperties, forwardRef, SelectHTMLAttributes } from "react";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { orderBy } from "lodash";

interface OptionType {
  id?: string | number;
  value: string;
}

interface CustomSelectInputPropTypes
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<OptionType | string>;
  defaultValue?: string | number;
  label: string;
  error?: {
    message?: string;
  };
  wrapperStyle?: CSSProperties;
}

const CustomSelectInput = forwardRef<
  HTMLSelectElement,
  CustomSelectInputPropTypes
>((props, ref) => {
  const { options, defaultValue, label, error, wrapperStyle, ...otherProps } =
    props;

  return (
    <div style={wrapperStyle}>
      <InputLabel variant="standard" sx={{ mb: 2 }}>
        {label}
      </InputLabel>
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={defaultValue ?? ""}
          inputProps={{ ...otherProps }}
          ref={ref}
        >
          {orderBy(options, ["value"], ["asc"]).map((option) => {
            // Handle both string and object cases for options
            if (typeof option === "string") {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            } else {
              return (
                <option
                  key={option.id ?? option.value}
                  value={option.id ?? option.value}
                >
                  {option.value}
                </option>
              );
            }
          })}
        </NativeSelect>
      </FormControl>
      {error && <span>{error.message}</span>}
    </div>
  );
});

export default CustomSelectInput;
