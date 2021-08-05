import { Fade, Grid, Grow, makeStyles } from '@material-ui/core';

import Terminal from 'components/terminal/Terminal';
import GithubButton from 'components/buttons/GitHubButton';
import LinkedInButton from 'components/buttons/LinkedInButton';

import Navbar from 'components/navbar/Navbar';
import TodoTree from 'components/projects/todo_tree/TodoTree';
import RecipesShare from 'components/projects/recipes_share/Main';
import ContactMe from 'components/contact_me/ContactMe';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Navbar></Navbar>

      <Grid item container direction="column" xs={12} sm={10} md={8}>
        <Grid
          item
          container
          direction="column"
          className={classes.root}
          style={{ padding: '4rem 0' }}
        >
          <Fade in={true}>
            <Grid item container>
              <Terminal></Terminal>
            </Grid>
          </Fade>

          <Grid item container style={{ flex: 1 }}></Grid>

          <Grid item container justify="center" style={{ marginTop: 24 }}>
            <Grow in={true}>
              <Grid item>
                <GithubButton></GithubButton>
              </Grid>
            </Grow>

            <Grow in={true}>
              <Grid item style={{ marginLeft: 40 }}>
                <LinkedInButton></LinkedInButton>
              </Grid>
            </Grow>
          </Grid>
        </Grid>

        <Grid
          id="todo-tree"
          item
          container
          className={classes.root}
          style={{ padding: `1.5rem 0` }}
        >
          <TodoTree></TodoTree>
        </Grid>

        <Grid
          id="recipes-share"
          item
          container
          direction="column"
          className={classes.root}
          style={{ padding: '1.5rem 0' }}
        >
          <RecipesShare></RecipesShare>
        </Grid>

        <Grid
          id="contact-me"
          item
          container
          className={classes.root}
          justify="center"
          style={{ padding: '1.5rem 0' }}
        >
          <Grid item container xs={12} sm={10} md={6}>
            <ContactMe></ContactMe>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
