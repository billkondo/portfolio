import { FunctionComponent } from 'react';
import { Grid, Button, Icon, makeStyles } from '@material-ui/core';

type StyleProps = {
  color: string;
  backgroundColor: string;
};
const useStyles = makeStyles({
  button: {
    fontSize: 24,
    textTransform: 'none',
    fontFamily: 'Varela Round, sans-serif',
    color: (props: StyleProps) => props.color,
    '&:hover': {
      backgroundColor: (props: StyleProps) => props.backgroundColor,
    },
    borderRadius: '8px',
  },
  icon: {
    fontSize: 24,
  },
});

type Props = {
  backgroundColor: string;
  color: string;
  icon: JSX.Element;
  label: string;
  link: string;
};
const SocialButton: FunctionComponent<Props> = ({
  backgroundColor,
  color,
  icon,
  label,
  link,
}) => {
  const classes = useStyles({ color, backgroundColor });

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <Button className={classes.button}>
        <Grid container alignItems="center">
          <Grid item style={{ paddingTop: 8, marginLeft: 8 }}>
            <Icon>{icon}</Icon>
          </Grid>

          <Grid item style={{ marginLeft: 12, marginRight: 8 }}>
            <b>{label}</b>
          </Grid>
        </Grid>
      </Button>
    </a>
  );
};

export default SocialButton;
