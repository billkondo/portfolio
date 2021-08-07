import { createStyles, Grid, makeStyles } from '@material-ui/core';

import Header from './Header';
import About from './About';
import Technical from './technical/Technical';

const useStyles = makeStyles((theme) =>
  createStyles({
    recipesShare: {
      height: '100%',
    },
    about: {
      marginTop: theme.spacing(6),
      flexGrow: 1,
    },
    technical: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(3),
    },
  })
);

const Main = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.recipesShare}>
      <Grid item container>
        <Header></Header>
      </Grid>

      <Grid item container className={classes.about}>
        <About></About>
      </Grid>

      <Grid item container className={classes.technical}>
        <Technical></Technical>
      </Grid>
    </Grid>
  );
};

export default Main;
