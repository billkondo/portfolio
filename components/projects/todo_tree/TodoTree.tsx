import { createStyles, Fade, Grid, makeStyles } from '@material-ui/core';

import TodoTreeHeader from './TodoTreeHeader';
import TodoTreeFeatures from './TodoTreeFeatures';

const useStyles = makeStyles((theme) =>
  createStyles({
    features: {
      marginTop: theme.spacing(10),
      font: 'Inika',
    },
  })
);

const TodoTree = () => {
  const classes = useStyles();

  return (
    <Fade in={true} mountOnEnter>
      <Grid container direction="column">
        <Grid item container>
          <TodoTreeHeader></TodoTreeHeader>
        </Grid>

        <Grid item container className={classes.features}>
          <TodoTreeFeatures></TodoTreeFeatures>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default TodoTree;
