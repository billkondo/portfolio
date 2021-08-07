import { FC } from 'react';
import { Grid, Icon, colors, makeStyles } from '@material-ui/core';
import { Bookmark, ThumbUpAlt, Create } from '@material-ui/icons';

import Title from 'components/typography/Title';
import Description from 'components/typography/Description';
import useRecipesShareTranslations from 'components/translations/useRecipesShareTranslations';

import useBreakpoint from 'hooks/useBreakpoint';

const useStyles = makeStyles({
  icon: {
    color: colors.red[400],
  },
});

const About = () => {
  const classes = useStyles();
  const { TITLE, BOOKMARK, LIKE, MOST_RATED, CREATE_EDIT } =
    useRecipesShareTranslations();
  const isSM = useBreakpoint('sm');

  return (
    <Grid container direction="column">
      <Grid item container justifyContent={isSM ? 'center' : 'flex-start'}>
        <Title textAlign={isSM ? 'center' : 'start'}>{TITLE}</Title>
      </Grid>

      <Grid
        item
        container
        justifyContent={isSM ? 'center' : 'flex-start'}
        style={{ minWidth: 500, marginTop: 40 }}
      >
        <Column>
          <Item>
            <Icon className={classes.icon}>
              <Bookmark></Bookmark>
            </Icon>
          </Item>

          <Item>
            <Icon className={classes.icon}>
              <ThumbUpAlt></ThumbUpAlt>
            </Icon>
          </Item>

          <Item>
            <i
              className="fas fa-trophy"
              style={{ fontSize: 16, color: colors.red[400] }}
              aria-hidden
            ></i>
          </Item>

          <Item>
            <Icon className={classes.icon}>
              <Create></Create>
            </Icon>
          </Item>
        </Column>

        <Column>
          <Item>
            <Description>{BOOKMARK}</Description>
          </Item>

          <Item>
            <Description>{LIKE}</Description>
          </Item>

          <Item>
            <Description>{MOST_RATED}</Description>
          </Item>

          <Item>
            <Description>{CREATE_EDIT}</Description>
          </Item>
        </Column>
      </Grid>
    </Grid>
  );
};

const Item: FC = ({ children }) => {
  return (
    <div
      style={{
        margin: 8,
        height: 32,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

const Column: FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
  );
};

export default About;
