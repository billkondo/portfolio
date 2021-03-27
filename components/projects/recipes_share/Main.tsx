import { Grid, makeStyles } from '@material-ui/core';

import Header from './Header';
import About from './About';

const useStyles = makeStyles({
  root: {
    paddingTop: 8,
  },
  about: {
    marginTop: 48,
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

      <Grid item container className={classes.about}>
        <About></About>
      </Grid>
    </Grid>
  );
};

export default Main;
