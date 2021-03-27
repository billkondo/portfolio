import { Grid, makeStyles } from '@material-ui/core';

import Header from './Header';

const useStyles = makeStyles({
  root: {
    paddingTop: 8,
  },
});

const Main = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      id="recipes-share"
      className={classes.root}
    >
      <Grid item container>
        <Header></Header>
      </Grid>
    </Grid>
  );
};

export default Main;
