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
const SubTitle: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.root}>
      {children}
    </Typography>
  );
};

export default SubTitle;
