import { FunctionComponent } from 'react';
import { Grid, Button, Icon, makeStyles } from '@material-ui/core';

type StyleProps = {
  color: string;
  backgroundColor: string;
};
const useStyles = makeStyles({
  root: {
    fontSize: 24,
    textTransform: 'none',
    fontFamily: 'Varela Round, sans-serif',
    color: (props: StyleProps) => props.color,
    '&:hover': {
      backgroundColor: (props: StyleProps) => props.backgroundColor,
    },
    borderRadius: '8px',
    padding: 8,
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
      <Grid className={classes.root} container direction="column">
        <Grid item container justify="center">
          <Icon style={{ fontSize: 32 }}>{icon}</Icon>
        </Grid>

        <Grid item container justify="center" style={{ marginTop: 8 }}>
          <b>{label}</b>
        </Grid>
      </Grid>
    </a>
  );
};

export default SocialButton;
