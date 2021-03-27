import { Grid, makeStyles } from '@material-ui/core';

import Header from './Header';

const Main = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Header></Header>
      </Grid>
    </Grid>
  );
};

export default Main;
