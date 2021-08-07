import { useEffect, useMemo, useState } from 'react';
import {
  Button,
  createStyles,
  Fade,
  Grid,
  Grow,
  makeStyles,
} from '@material-ui/core';

import ProjectsConfig from 'config/projects';

import useBreakpoint from 'hooks/useBreakpoint';
import useTodoTreeTranslations from 'components/translations/useTodoTreeTranslations';

import Picture from './components/Picture';
import Text from './components/Text';

type StyleProps = {
  isLG: boolean;
  isMD: boolean;
  imageHeight: number;
};
const useStyles = makeStyles((theme) =>
  createStyles({
    image: {
      borderRadius: theme.spacing(1),
      objectFit: 'fill',
      height: (props: StyleProps) => props.imageHeight,
      width: '100%',
      boxShadow: '0px 0px 2px 2px rgba(0,0,0,0.16)',
      backgroundColor: theme.palette.grey[100],
    },
    imageItem: {
      width: '100%',
      paddingRight: (props: StyleProps) =>
        props.isLG ? theme.spacing(2.5) : 0,
      paddingTop: (props: StyleProps) => (props.isLG ? 0 : theme.spacing(2.5)),
    },
    textItem: {
      paddingLeft: (props: StyleProps) => (props.isLG ? theme.spacing(2.5) : 0),
      paddingBottom: (props: StyleProps) =>
        props.isLG ? 0 : theme.spacing(2.5),
    },
    text: {
      marginTop: theme.spacing(4),
    },
    buttons: {
      marginTop: theme.spacing(4),
    },
    button: {
      textTransform: 'none',
      backgroundColor: ProjectsConfig.todoTree.theme.LIGHT,
      color: theme.palette.grey[50],
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: ProjectsConfig.todoTree.theme.DARK,
      },
    },
    underlineButton: {
      textTransform: 'none',
      textDecoration: 'none',
      color: ProjectsConfig.todoTree.theme.LIGHT,
      '&:hover': {
        textDecoration: 'underline',
        color: ProjectsConfig.todoTree.theme.DARK,
        backgroundColor: 'transparent',
      },
    },
  })
);

const TodoTreeFeatures = () => {
  const {
    VISUALIZE,
    TREE_UI,
    CREATE,
    COMPLETE,
    DESCRIPTION,
    TEST_WITHOUT_ACCOUNT,
  } = useTodoTreeTranslations();
  const isLG = useBreakpoint('lg');
  const isMD = useBreakpoint('md');

  const imageHeight = useMemo(() => {
    if (isLG) return 320;
    if (isMD) return 280;
    return 240;
  }, [isLG, isMD]);

  const classes = useStyles({ isLG, isMD, imageHeight });

  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(true);

  const textHeight = useMemo(() => {
    if (isMD) return 100;
    return 240;
  }, [isMD]);

  const TRANSITION_DURATION = 800;

  const Images = ['/todo_tree_01.png', '/todo_tree_02.png'];
  const Titles = [
    <>
      <Text variant="h4">{VISUALIZE}</Text>
      <Text variant="h4">{TREE_UI}</Text>
    </>,
    <>
      <Text variant="h4">{CREATE}</Text>
      <Text variant="h4">{COMPLETE}</Text>
    </>,
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setActiveIndex((activeIndex) => (activeIndex + 1) % Images.length);
        setShow(true);
      }, TRANSITION_DURATION + 400);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row-reverse"
    >
      <Grid item md={12} lg={6} className={classes.textItem}>
        <Grid container direction="column">
          <Grid item container justifyContent={isLG ? 'flex-start' : 'center'}>
            <div style={{ height: textHeight }}>
              {Titles.map((title, index) => {
                return (
                  <Grow
                    key={index}
                    in={show && index === activeIndex}
                    unmountOnExit
                    mountOnEnter
                    timeout={{
                      appear: TRANSITION_DURATION,
                      enter: TRANSITION_DURATION,
                      exit: TRANSITION_DURATION,
                    }}
                  >
                    <div>{title}</div>
                  </Grow>
                );
              })}
            </div>
          </Grid>

          <Grid item container className={classes.text}>
            <Text variant="h5" textAlign="justify">
              {DESCRIPTION}
            </Text>
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.buttons}
          alignItems="baseline"
          justifyContent="flex-end"
        >
          <Grid item>
            <a
              href={ProjectsConfig.todoTree.ANONYMOUS_LOGIN}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className={classes.underlineButton}
                size="large"
                style={{ padding: 0 }}
              >
                <b>{TEST_WITHOUT_ACCOUNT}</b>
              </Button>
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={12} lg={6} className={classes.imageItem}>
        <div className={classes.image}>
          {Images.map((imagePath, index) => {
            return (
              <Fade
                key={imagePath}
                in={show && index === activeIndex}
                unmountOnExit
                mountOnEnter
                timeout={{
                  exit: TRANSITION_DURATION,
                  appear: TRANSITION_DURATION,
                  enter: TRANSITION_DURATION,
                }}
              >
                <div>
                  <Picture path={imagePath} height={imageHeight}></Picture>
                </div>
              </Fade>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default TodoTreeFeatures;
