import { Grid, Typography, makeStyles } from '@material-ui/core';

import FirebaseIcon from 'components/icons/FirebaseIcon';
import GmailIcon from 'components/icons/GmailIcon';
import MaterialUIIcon from 'components/icons/MaterialUIIcon';

const black87 = 'rgba(0, 0, 0, 0.87)';
const useStyles = makeStyles({
  title: {
    margin: 8,
    fontFamily: 'Varela Round, sans-serif',
  },
  item: {
    fontFamily: 'Varela Round, sans-serif',
  },
  itemLeft: {
    margin: 8,
  },
  itemRight: {
    margin: 8,
    fontSize: 16,
    color: black87,
  },
});

const Acknowledgements = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container>
        <Typography variant="h6" className={classes.title}>
          Acknowledgements
        </Typography>
      </Grid>

      <Grid item container className={classes.item} style={{ marginTop: 16 }}>
        <Grid item className={classes.itemLeft}>
          <MaterialUIIcon></MaterialUIIcon>
        </Grid>

        <Grid item className={classes.itemRight}>
          <a
            href="https://icons8.com/icon/gFw7X5Tbl3ss/material-ui"
            target="_blank"
            rel="noreferrer"
          >
            Material UI icon by <b>Icons8</b>
          </a>
        </Grid>
      </Grid>

      <Grid item container className={classes.item}>
        <Grid item className={classes.itemLeft}>
          <FirebaseIcon></FirebaseIcon>
        </Grid>

        <Grid item className={classes.itemRight}>
          <a
            href="https://icons8.com/icon/62452/firebase"
            target="_blank"
            rel="noreferrer"
          >
            Firebase icon by <b>Icons8</b>
          </a>
        </Grid>
      </Grid>

      <Grid item container className={classes.item}>
        <Grid item className={classes.itemLeft}>
          <GmailIcon></GmailIcon>
        </Grid>

        <Grid item className={classes.itemRight}>
          <a
            href="https://icons8.com/icon/ho8QlOYvMuG3/gmail"
            target="_blank"
            rel="noreferrer"
          >
            Gmail icon by <b>Icons8</b>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Acknowledgements;
