import { Grid, colors, makeStyles } from '@material-ui/core';

import Tree from 'components/tree/Tree';

const black = '#121212';

const useStyles = makeStyles({
  root: {
    padding: '8px 16px 8px 16px',
    borderRadius: '0 0 8px 8px',
    backgroundColor: black,
  },
  name: {
    fontFamily: 'VT323',
    color: colors.grey[200],
  },
});

const Body = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item container>
        <Tree
          node={{
            label: 'Projects',
            children: [
              {
                label: 'Recipes Share',
                children: [],
              },
            ],
          }}
        ></Tree>
      </Grid>
    </Grid>
  );
};

export default Body;
