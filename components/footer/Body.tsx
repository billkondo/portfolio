import { Grid, makeStyles } from '@material-ui/core';

import Contacts from './body/Contacts';

const useStyles = makeStyles({
  item: {
    margin: 40,
  },
});

const Body = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item className={classes.item}>
        <Contacts></Contacts>
      </Grid>
    </Grid>
  );
};

export default Body;
