import { Grid } from '@material-ui/core';

import SubTitle from 'components/typography/Subtitle';

import CloudFunctionsIcon from 'components/icons/CloudFunctionsIcon';
import FirebaseIcon from 'components/icons/FirebaseIcon';
import MaterialUIIcon from 'components/icons/MaterialUIIcon';

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

        <Grid item container direction="column" style={{ marginTop: 24 }}>
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

          <Grid item container justify="center" style={{ marginTop: 20 }}>
            <Technology
              url="https://material-ui.com/"
              icon={<MaterialUIIcon></MaterialUIIcon>}
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

        <Grid item container direction="column" style={{ marginTop: 24 }}>
          <Grid item container justify="center">
            <Technology
              url="https://firebase.google.com/"
              icon={<FirebaseIcon></FirebaseIcon>}
              text="Firebase"
            ></Technology>
          </Grid>

          <Grid item container direction="column" style={{ marginTop: 20 }}>
            <Grid item container justify="center">
              <Technology
                url="https://firebase.google.com/docs/functions"
                icon={<CloudFunctionsIcon></CloudFunctionsIcon>}
                text="Cloud Functions for Firebase"
              ></Technology>
            </Grid>

            <Grid item container justify="center">
              <span
                style={{
                  color: 'rgba(0,0,0,0.87)',
                  fontSize: 24,
                  fontFamily: 'Delius, cursive',
                }}
              >
                +
              </span>
            </Grid>

            <Grid item container justify="center">
              <Technology
                url="https://nodejs.org/en/"
                icon={
                  <i
                    className="fab fa-node-js"
                    style={{ fontSize: 24, color: '#026e00' }}
                    aria-hidden
                  ></i>
                }
                text="Node JS"
              ></Technology>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Technical;
