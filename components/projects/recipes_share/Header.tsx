import { Grid, Typography, makeStyles } from '@material-ui/core';

import ProjectsConfig from 'config/projects';

import useBreakpoint from 'hooks/useBreakpoint';

const useStyles = makeStyles({
  icon: {
    color: ProjectsConfig.recipesShare.theme.MAIN,
    fontSize: 32,
  },
  text: {
    fontFamily: 'Pacifico,cursive',
    color: ProjectsConfig.recipesShare.theme.MAIN,
  },
  link: {
    color: ProjectsConfig.recipesShare.theme.MAIN,
    '&:hover': {
      color: ProjectsConfig.recipesShare.theme.LIGHT,
      textDecoration: 'underline',
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const isSM = useBreakpoint('sm');

  return (
    <Grid container direction="column">
      <Grid item container alignItems="center">
        {isSM && (
          <Grid item>
            <i className={`fas fa-book ${classes.icon}`} aria-hidden></i>
          </Grid>
        )}

        <Grid item>
          <Typography
            variant="h3"
            className={classes.text}
            style={{ marginLeft: isSM ? 24 : 0 }}
          >
            Recipes Share
          </Typography>
        </Grid>
      </Grid>

      <Grid item container style={{ marginTop: 8 }}>
        <a
          href={ProjectsConfig.recipesShare.URL}
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          <i>
            <Typography variant="body1">
              {ProjectsConfig.recipesShare.URL}
            </Typography>
          </i>
        </a>
      </Grid>
    </Grid>
  );
};

export default Header;
