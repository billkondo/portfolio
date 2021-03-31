import { TextField, withStyles } from '@material-ui/core';
import { FunctionComponent } from 'react';

const StyledTextField = withStyles({})(TextField);

type Props = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  fullWidth?: boolean;
  multiline?: boolean;
};
const FormTextField: FunctionComponent<Props> = ({
  value,
  onChange,
  label,
  fullWidth = false,
  multiline = false,
}) => {
  return (
    <StyledTextField
      value={value}
      label={label}
      variant="outlined"
      fullWidth={fullWidth}
      multiline={multiline}
      onChange={(e) => onChange(e.target.value)}
      rows={8}
    ></StyledTextField>
  );
};

export default FormTextField;
