import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';

import ProjectsConfig from 'config/projects';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontFamily: 'Sriracha, cursive',
      color: ProjectsConfig.todoTree.theme.MAIN,
    },
    link: {
      color: ProjectsConfig.todoTree.theme.DARK,
      '&:hover': {
        color: ProjectsConfig.todoTree.theme.MAIN,
        textDecoration: 'underline',
      },
    },
    url: {
      marginTop: theme.spacing(1),
    },
  })
);

const TodoTreeHeader = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container>
        <Typography variant="h3" className={classes.title}>
          <b>
            <i>{ProjectsConfig.todoTree.NAME}</i>
          </b>
        </Typography>
      </Grid>

      <Grid item container className={classes.url}>
        <a
          href={ProjectsConfig.todoTree.URL}
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          <i>
            <Typography variant="body1">
              {ProjectsConfig.todoTree.URL}
            </Typography>
          </i>
        </a>
      </Grid>
    </Grid>
  );
};

export default TodoTreeHeader;
