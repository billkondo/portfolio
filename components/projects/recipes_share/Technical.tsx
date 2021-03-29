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
});

const Technical = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container justify="center">
        <SubTitle>
          <b>Front End</b>
        </SubTitle>
      </Grid>

      <Grid item container direction="column" style={{ marginTop: 16 }}>
        <Grid item container justify="center" alignItems="center">
          <Grid item className={classes.icon}>
            <i
              className="fab fa-react"
              aria-hidden
              style={{ color: '#61dafb' }}
            ></i>
          </Grid>

          <Grid item className={classes.text}>
            <Description>React</Description>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify="center"
          alignItems="center"
          style={{ marginTop: 8 }}
        >
          <Grid
            item
            className={classes.icon}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src="https://img.icons8.com/color/50/000000/material-ui.png"
              style={{ height: 24, width: 24 }}
            />
          </Grid>

          <Grid item className={classes.text}>
            <Description>Material UI</Description>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Technical;
