import { Grid, Icon, colors, makeStyles } from '@material-ui/core';
import { Bookmark, ThumbUpAlt, Create } from '@material-ui/icons';

import Title from 'components/typography/Title';
import Description from 'components/typography/Description';

const useStyles = makeStyles({
  iconItem: {
    marginTop: 8,
  },
  icon: {
    color: colors.red[400],
  },
  text: {
    marginLeft: 16,
  },
  features: {
    marginTop: 32,
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container justify="center">
        <Title>Discover new recipes and share them</Title>
      </Grid>

      <Grid item container direction="column" className={classes.features}>
        <Grid item container justify="center" alignItems="center">
          <Grid item className={classes.iconItem}>
            <Icon className={classes.icon}>
              <Bookmark></Bookmark>
            </Icon>
          </Grid>

          <Grid item className={classes.text}>
            <Description>Recipes bookmarking</Description>
          </Grid>
        </Grid>

        <Grid item container justify="center" alignItems="center">
          <Grid item className={classes.iconItem}>
            <Icon className={classes.icon}>
              <ThumbUpAlt></ThumbUpAlt>
            </Icon>
          </Grid>

          <Grid item className={classes.text}>
            <Description>Recipes liking</Description>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.iconItem}
        >
          <Grid item>
            <i
              class="fas fa-trophy"
              style={{ fontSize: 16, color: colors.red[400] }}
            ></i>
          </Grid>

          <Grid item className={classes.text}>
            <Description>Most rated recipes</Description>
          </Grid>
        </Grid>

        <Grid item container justify="center" alignItems="center">
          <Grid item className={classes.iconItem}>
            <Icon className={classes.icon}>
              <Create></Create>
            </Icon>
          </Grid>

          <Grid item className={classes.text}>
            <Description>Easy to create and edit</Description>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
