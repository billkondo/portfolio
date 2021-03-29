import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontFamily: 'Varela Round, sans-serif',
  },
  link: {
    fontSize: 16,
    fontFamily: 'Varela Round, sans-serif',
  },
});

const Body = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <Typography variant="h6" className={classes.title}>
              <b>Acknowledgements</b>
            </Typography>
          </div>

          <div style={{ marginTop: 16, display: 'flex' }}>
            <img
              src="https://img.icons8.com/color/50/000000/material-ui.png"
              style={{ height: 24, width: 24 }}
            />

            <a
              href="https://icons8.com/icon/gFw7X5Tbl3ss/material-ui"
              target="_blank"
              className={classes.link}
              style={{ marginLeft: 16 }}
            >
              Material UI icon by <b>Icons8</b>
            </a>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Body;
