import { Grid, colors, makeStyles } from '@material-ui/core';

import Tree from 'components/tree/Tree';

const black = '#121212';

const useStyles = makeStyles({
  root: {
    padding: '8px 16px 8px 16px',
    borderRadius: '0 0 8px 8px',
    backgroundColor: black,
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
                onClick: () => {
                  const doc = document.getElementById('recipes-share');

                  window.scrollTo({
                    behavior: 'smooth',
                    top: doc.offsetTop,
                  });
                },
              },
            ],
          }}
        ></Tree>
      </Grid>
    </Grid>
  );
};

export default Body;
