import { TextField, colors, withStyles } from '@material-ui/core';
import { FunctionComponent } from 'react';

const black32 = 'rgba(0, 0, 0, 0.32)';
const black56 = 'rgba(0, 0, 0, 0.56)';
const black88 = 'rgba(0, 0, 0, 0.88)';

const StyledTextField = withStyles({
  root: {
    color: black88,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: black56,
      },
      '&:hover fieldset': {
        borderColor: colors.grey[400],
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.grey[600],
      },
      '&.Mui-error': {
        '& fieldset': {
          borderColor: colors.red[600],
        },
      },
    },
    '& .MuiInputLabel-outlined': {
      fontFamily: 'Varela Round, sans-serif',
      color: black32,
      '&.Mui-focused': {
        color: black88,
      },
    },
    '& .MuiFormHelperText-root': {
      fontFamily: 'Delius, cursive',
      '&.Mui-error': {
        color: colors.red[900],
      },
    },
    '& .MuiInputBase-root': {
      fontFamily: 'Delius, cursive',
      lineHeight: 1.5,
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: black56,
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: colors.red[200],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.red[400],
    },
  },
})(TextField);

type Props = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: string;
  fullWidth?: boolean;
  multiline?: boolean;
};
const FormTextField: FunctionComponent<Props> = ({
  value,
  onChange,
  label,
  fullWidth = false,
  multiline = false,
  error = '',
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
      error={!!error}
      helperText={error || ' '}
    ></StyledTextField>
  );
};

export default FormTextField;
