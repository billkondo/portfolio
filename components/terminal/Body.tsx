import { Grid, makeStyles } from '@material-ui/core';

import Root from 'components/tree/Root';

import scrollToElement from 'utils/scrollToElement';

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
        <Root
          nodes={[
            {
              label: 'Projects',
              children: [
                {
                  label: 'Recipes Share',
                  children: [],
                  onClick: () => scrollToElement(window, 'recipes-share'),
                },
              ],
            },
            {
              label: 'Contact me',
              children: [],
              onClick: () => scrollToElement(window, 'contact-me'),
            },
          ]}
        ></Root>
      </Grid>
    </Grid>
  );
};

export default Body;
