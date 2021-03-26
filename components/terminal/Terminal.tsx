import { Paper, Grid, Divider, colors, makeStyles } from '@material-ui/core';

import Header from './Header';
import Body from './Body';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderRadius: '8px',
  },
});

const Terminal = () => {
  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.root}>
      <Grid container direction="column">
        <Grid item container>
          <Header></Header>
        </Grid>

        <Grid item>
          <Divider style={{ backgroundColor: colors.grey[800] }}></Divider>
        </Grid>

        <Grid item container>
          <Body></Body>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Terminal;
