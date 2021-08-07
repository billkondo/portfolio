import { Grid, Icon, Typography, colors, makeStyles } from '@material-ui/core';
import { Folder } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    padding: 8,
    position: 'relative',
    borderRadius: '8px 8px 0 0',
    backgroundColor: colors.grey[900],
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    boxShadow: 'inset -3px -3px 10px 0px rgba(0,0,0,0.40)',
  },
  titleSpace: {
    position: 'absolute',
    width: '100%',
  },
  folder: {
    color: colors.blue[200],
  },
  title: {
    fontFamily: 'Varela Round, sans-serif',
    color: colors.grey[200],
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container style={{ height: 32 }} className={classes.root}>
      <Grid item>
        <div
          className={classes.circle}
          style={{
            backgroundColor: colors.red[200],
          }}
        ></div>
      </Grid>

      <Grid item>
        <div
          className={classes.circle}
          style={{
            backgroundColor: colors.yellow[200],
            marginLeft: 8,
          }}
        ></div>
      </Grid>

      <Grid item>
        <div
          className={classes.circle}
          style={{
            backgroundColor: colors.green[200],
            marginLeft: 8,
          }}
        ></div>
      </Grid>

      <div className={classes.titleSpace}>
        <Grid container justifyContent="center" style={{ marginTop: -4 }}>
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
