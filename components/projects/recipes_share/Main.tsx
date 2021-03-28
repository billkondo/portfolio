import { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Header from './Header';
import Options from './Options';
import About from './About';
import Technical from './Technical';

const useStyles = makeStyles({
  root: {
    paddingTop: 8,
  },
  options: {
    marginTop: 24,
  },
  content: {
    marginTop: 48,
  },
  carousel: {
    width: '100%',
  },
});

const Main = () => {
  const [selectedID, setSelectedID] = useState('about');
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      id="recipes-share"
      className={classes.root}
    >
      <Grid item container>
        <Header></Header>
      </Grid>

      <Grid item container className={classes.options}>
        <Options
          selectedID={selectedID}
          onClick={(id: string) => setSelectedID(id)}
        ></Options>
      </Grid>

      <Grid item container className={classes.content}>
        <Carousel
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          selectedItem={selectedID === 'about' ? 0 : 1}
          className={classes.carousel}
        >
          <About></About>
          <Technical></Technical>
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default Main;
