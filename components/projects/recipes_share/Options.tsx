import { FunctionComponent } from 'react';
import { Grid, Button, colors, makeStyles } from '@material-ui/core';

type StylesProps = {
  isSelected: boolean;
};
const useStyles = makeStyles({
  button: {
    borderRadius: 32,
    borderColor: (props: StylesProps) =>
      props.isSelected ? colors.red[400] : colors.grey[900],
    color: (props: StylesProps) =>
      props.isSelected ? colors.red[400] : colors.grey[900],
    opacity: (props: StylesProps) => (props.isSelected ? 1.0 : 0.24),
    '&:hover': {
      backgroundColor: colors.red[50],
    },
  },
});

type Props = {
  selectedID: string;
  onClick: (id: string) => void;
};
const Options: FunctionComponent<Props> = ({ selectedID, onClick }) => {
  return (
    <Grid container>
      <Grid item>
        <Option
          label="About"
          isSelected={selectedID === 'about'}
          onClick={() => onClick('about')}
        ></Option>
      </Grid>
      <Grid item style={{ marginLeft: 16 }}>
        <Option
          label="Technical"
          isSelected={selectedID === 'technical'}
          onClick={() => onClick('technical')}
        ></Option>
      </Grid>
    </Grid>
  );
};

type OptionProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};
const Option: FunctionComponent<OptionProps> = ({
  label,
  isSelected,
  onClick,
}) => {
  const classes = useStyles({ isSelected });

  return (
    <Button variant="outlined" className={classes.button} onClick={onClick}>
      {label}
    </Button>
  );
};

export default Options;
