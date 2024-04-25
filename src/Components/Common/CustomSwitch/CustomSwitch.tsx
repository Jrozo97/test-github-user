import { FormControlLabel, FormGroup } from "@mui/material";
import { CustomSwitchProps } from "../../../types/componentsProps.type";
import { MaterialUISwitch } from "./CustomSwitch.style";

const CustomSwitch = ({ label, checked, onChange }: CustomSwitchProps) => {
  return (
    <FormGroup className="self-center mb-3">
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={checked}
            onChange={onChange}
          />
        }
        label={
          <span
            className="text-xl font-semibold dark:text-white"
          >
            {label}
          </span>
        }
      />
    </FormGroup>
  );
};

export default CustomSwitch;