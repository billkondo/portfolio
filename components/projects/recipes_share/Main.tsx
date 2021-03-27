import { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Header from './Header';
import Options from './Options';
import About from './About';
import Technical from './Technical';

const useStyles = makeStyles({
  root: {
    paddingTop: 8,
  },
  options: {
    marginTop: 24,
  },
  content: {
    marginTop: 48,
  },
});

const Main = () => {
  const [selectedID, setSelectedID] = useState('about');
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

      <Grid item container className={classes.options}>
        <Options
          selectedID={selectedID}
          onClick={(id) => setSelectedID(id)}
        ></Options>
      </Grid>

      <Grid item container className={classes.content}>
        {selectedID === 'about' ? <About></About> : <Technical></Technical>}
      </Grid>
    </Grid>
  );
};

export default Main;
