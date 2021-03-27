import { FunctionComponent } from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Varela Round, sans-serif',
    lineHeight: 1.5,
    textAlign: 'center',
  },
});

type Props = {};
const Title: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.root}>
      {children}
    </Typography>
  );
};

export default Title;
