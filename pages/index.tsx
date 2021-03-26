import { Grid } from '@material-ui/core';

import Terminal from 'components/terminal/Terminal';

export default function Home() {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Terminal></Terminal>
      </Grid>
    </Grid>
  );
}
