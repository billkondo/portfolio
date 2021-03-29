import { Grid, makeStyles, Typography } from '@material-ui/core';

import Body from './Body';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderTop: '1px solid #eaeaea',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
  },
  body: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  name: {
    marginTop: 64,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container direction="column">
        <Grid item container className={classes.body}>
          <Body></Body>
        </Grid>

        <Grid item container className={classes.name} justify="center">
          <Typography
            variant="h5"
            style={{ fontFamily: 'Varela Round, sans-serif' }}
          >
            <b>William Hideki Kondo</b>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
