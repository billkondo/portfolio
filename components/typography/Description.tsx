import { FunctionComponent } from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Delius, cursive',
    lineHeight: 1.5,
    fontSize: '1.25rem',
  },
});

type Props = {};
const Description: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant="body1" className={classes.root}>
      {children}
    </Typography>
  );
};

export default Description;
