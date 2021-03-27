import { Grid, makeStyles } from '@material-ui/core';

import Terminal from 'components/terminal/Terminal';
import GithubButton from 'components/buttons/GitHubButton';
import LinkedInButton from 'components/buttons/LinkedInButton';

import RecipesShare from 'components/projects/recipes_share/Main';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item container direction="column" xs={12} sm={10} md={8}>
        <Grid item container direction="column" className={classes.root}>
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

        <Grid item container direction="column" className={classes.root}>
          <RecipesShare></RecipesShare>
        </Grid>
      </Grid>
    </Grid>
  );
}
