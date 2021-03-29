import { Grid } from '@material-ui/core';

import SubTitle from 'components/typography/Subtitle';

import Technology from './Technology';

const Technical = () => {
  return (
    <Grid container direction="column">
      <Grid item container direction="column">
        <Grid item container justify="center">
          <SubTitle>
            <b>Front End</b>
          </SubTitle>
        </Grid>

        <Grid item container direction="column" style={{ marginTop: 16 }}>
          <Grid item container justify="center">
            <Technology
              url="https://reactjs.org/"
              icon={
                <i
                  className="fab fa-react"
                  aria-hidden
                  style={{ color: '#61dafb', fontSize: 24 }}
                ></i>
              }
              text="React"
            ></Technology>
          </Grid>

          <Grid item container justify="center" style={{ marginTop: 8 }}>
            <Technology
              url="https://material-ui.com/"
              icon={
                <img
                  src="https://img.icons8.com/color/50/000000/material-ui.png"
                  style={{ height: 24, width: 24 }}
                />
              }
              text="Material UI"
            ></Technology>
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
            <Technology
              url="https://firebase.google.com/"
              icon={
                <img
                  src="https://img.icons8.com/color/48/000000/firebase.png"
                  style={{ height: 24, width: 24 }}
                />
              }
              text="Firebase"
            ></Technology>
          </Grid>

          <Grid item container justify="center" style={{ marginTop: 8 }}>
            <Technology
              url="https://nodejs.org/en/"
              icon={
                <i
                  className="fab fa-node-js"
                  style={{ fontSize: 24, color: '#026e00' }}
                ></i>
              }
              text="Node JS"
            ></Technology>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Technical;
