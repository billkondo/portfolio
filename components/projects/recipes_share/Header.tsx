import { Grid, Typography, colors, makeStyles } from '@material-ui/core';

import useIsUpSM from 'hooks/useIsUpSM';
import ProjectURL from './ProjectURL';

const useStyles = makeStyles({
  icon: {
    color: colors.red[400],
    fontSize: 32,
  },
  text: {
    fontFamily: 'Pacifico,cursive',
    color: colors.red[400],
  },
  textItem: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  urlItem: {
    paddingLeft: 32,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const Header = () => {
  const classes = useStyles();
  const isUpSM = useIsUpSM();

  return (
    <Grid container alignItems="center" direction="row-reverse">
      <Grid item className={classes.urlItem}>
        <ProjectURL></ProjectURL>
      </Grid>

      <Grid item className={classes.textItem}>
        <Typography
          variant="h3"
          className={classes.text}
          style={{ marginLeft: isUpSM ? 24 : 0 }}
        >
          Recipes Share
        </Typography>
      </Grid>

      {isUpSM && (
        <Grid item>
          <i className={`fas fa-book ${classes.icon}`} aria-hidden></i>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
