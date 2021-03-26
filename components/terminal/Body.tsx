import { Grid, colors, makeStyles } from '@material-ui/core';

import NAME from 'config/name';

const black87 = 'rgba(0, 0, 0, 0.87)';

const useStyles = makeStyles({
  root: {
    padding: '8px 16px 8px 16px',
    borderRadius: '0 0 8px 8px',
  },
  name: {
    fontFamily: 'VT323',
    color: black87,
  },
});

const Body = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item container>
        <h1 className={classes.name}>{NAME}</h1>
      </Grid>
    </Grid>
  );
};

export default Body;
