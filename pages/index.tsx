import { Grid, makeStyles } from '@material-ui/core';

import GithubButton from 'components/buttons/GitHubButton';
import LinkedInButton from 'components/buttons/LinkedinButton';

import Terminal from 'components/terminal/Terminal';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center">
      <Grid item container direction="column" xs={12} sm={10} md={8}>
        <Grid item container>
          <Terminal></Terminal>
        </Grid>

        <Grid item container style={{ marginTop: 24 }} justify="flex-end">
          <Grid item>
            <GithubButton></GithubButton>
          </Grid>
        </Grid>

        <Grid item container justify="flex-end">
          <Grid item>
            <LinkedInButton></LinkedInButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
