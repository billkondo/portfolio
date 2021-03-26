import {
  Grid,
  Icon,
  Paper,
  Typography,
  colors,
  makeStyles,
} from '@material-ui/core';
import { Folder } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    padding: 8,
    position: 'relative',
    borderRadius: '8px 8px 0 0',
    backgroundColor: colors.yellow[100],
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  titleSpace: {
    position: 'absolute',
    width: '100%',
  },
  folder: {
    color: colors.blue[900],
  },
  title: {
    fontFamily: 'Varela Round, sans-serif',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container style={{ height: 32 }} className={classes.root}>
      <Grid item>
        <Paper
          className={classes.circle}
          style={{
            backgroundColor: colors.red[900],
          }}
        ></Paper>
      </Grid>

      <Grid item>
        <Paper
          className={classes.circle}
          style={{
            backgroundColor: colors.yellow[900],
            marginLeft: 8,
          }}
        ></Paper>
      </Grid>

      <Grid item>
        <Paper
          className={classes.circle}
          style={{
            backgroundColor: colors.green[900],
            marginLeft: 8,
          }}
        ></Paper>
      </Grid>

      <div className={classes.titleSpace}>
        <Grid container justify="center" style={{ marginTop: -4 }}>
          <Grid item>
            <Icon className={classes.folder}>
              <Folder></Folder>
            </Icon>
          </Grid>

          <Grid item style={{ marginLeft: 8, marginTop: 2 }}>
            <Typography className={classes.title} variant="body1">
              billkondo
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default Header;
