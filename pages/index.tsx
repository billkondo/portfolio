import {
  createStyles,
  Divider,
  Fade,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Terminal from 'components/terminal/Terminal';

import Navbar from 'components/navbar/Navbar';

import Links from 'components/links/Links';
import TodoTree from 'components/projects/todo_tree/TodoTree';
import RecipesShare from 'components/projects/recipes_share/Main';
import ContactMe from 'components/contact_me/ContactMe';

import { DESKTOP_HEIGHT, MOBILE_HEIGHT } from 'components/navbar/navbarConfig';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      paddingTop: MOBILE_HEIGHT + theme.spacing(1),
      [theme.breakpoints.up('lg')]: {
        paddingTop: DESKTOP_HEIGHT + theme.spacing(3),
      },
    },
    divider: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
    },
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Navbar></Navbar>

      <Grid item container direction="column" xs={12} sm={10} md={8}>
        <Grid item container direction="column" className={classes.root}>
          <Fade in={true}>
            <Grid item container>
              <Terminal></Terminal>
            </Grid>
          </Fade>

          <Grid item style={{ flexGrow: 1 }}></Grid>

          <Grid item container style={{ marginBottom: 40, marginTop: 40 }}>
            <Links></Links>
          </Grid>
        </Grid>

        <Divider className={classes.divider}></Divider>

        <Grid id="todo-tree" item container className={classes.root}>
          <TodoTree></TodoTree>
        </Grid>

        <Divider className={classes.divider}></Divider>

        <Grid
          id="recipes-share"
          item
          container
          direction="column"
          className={classes.root}
        >
          <RecipesShare></RecipesShare>
        </Grid>

        <Divider className={classes.divider}></Divider>

        <Grid
          id="contact-me"
          item
          container
          className={classes.root}
          justifyContent="center"
        >
          <Grid item container xs={12} sm={10} md={6}>
            <ContactMe></ContactMe>
          </Grid>
        </Grid>

        <Divider className={classes.divider}></Divider>
      </Grid>
    </Grid>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'todo_tree',
        'recipes_share',
        'contact_me',
      ])),
    },
  };
}
