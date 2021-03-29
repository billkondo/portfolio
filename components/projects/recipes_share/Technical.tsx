import { Grid, makeStyles } from '@material-ui/core';
import Description from 'components/typography/Description';

import SubTitle from 'components/typography/Subtitle';

const useStyles = makeStyles({
  icon: {
    fontSize: 24,
  },
  text: {
    marginLeft: 16,
  },
  link: {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
  },
});

const Technical = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container direction="column">
        <Grid item container justify="center">
          <SubTitle>
            <b>Front End</b>
          </SubTitle>
        </Grid>

        <Grid item container direction="column" style={{ marginTop: 16 }}>
          <Grid item container justify="center" alignItems="center">
            <a
              href="https://reactjs.org/"
              target="_blank"
              className={classes.link}
            >
              <div className={classes.icon}>
                <i
                  className="fab fa-react"
                  aria-hidden
                  style={{ color: '#61dafb' }}
                ></i>
              </div>

              <div className={classes.text}>
                <Description>React</Description>
              </div>
            </a>
          </Grid>

          <Grid
            item
            container
            justify="center"
            alignItems="center"
            style={{ marginTop: 8 }}
          >
            <a
              href="https://material-ui.com/"
              target="_blank"
              className={classes.link}
            >
              <img
                src="https://img.icons8.com/color/50/000000/material-ui.png"
                style={{ height: 24, width: 24 }}
              />

              <div className={classes.text}>
                <Description>Material UI</Description>
              </div>
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction="column" style={{ marginTop: 64 }}>
        <Grid item container justify="center">
          <SubTitle>
            <b>Back End</b>
          </SubTitle>
        </Grid>

        <Grid item container direction="column" style={{ marginTop: 16 }}>
          <Grid item container justify="center">
            <a
              href="https://firebase.google.com/"
              target="_blank"
              className={classes.link}
            >
              <img
                src="https://img.icons8.com/color/48/000000/firebase.png"
                style={{ height: 24, width: 24 }}
              />

              <div className={classes.text}>
                <Description>Firebase</Description>
              </div>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Technical;
