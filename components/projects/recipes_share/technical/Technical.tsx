import { colors, createStyles, Grid, makeStyles } from '@material-ui/core';

import CloudFunctionsIcon from 'components/icons/CloudFunctionsIcon';
import FirebaseIcon from 'components/icons/FirebaseIcon';
import MaterialUIIcon from 'components/icons/MaterialUIIcon';

import Technology from './Technology';

const stack = [
  {
    url: 'https://reactjs.org',
    text: 'React',
    icon: (
      <i
        className="fab fa-react"
        aria-hidden
        style={{ color: '#61dafb', fontSize: 24 }}
      />
    ),
    color: colors.blue[900],
  },
  {
    url: 'https://material-ui.com',
    text: 'Material UI',
    icon: <MaterialUIIcon />,
    color: colors.indigo[900],
  },
  {
    url: 'https://firebase.google.com/',
    text: 'Firebase',
    icon: <FirebaseIcon />,
    color: colors.orange[900],
  },
  {
    url: 'https://firebase.google.com/docs/functions',
    text: 'Cloud Functions for Firebase',
    icon: <CloudFunctionsIcon />,
    color: colors.yellow[900],
  },
  {
    url: 'https://nodejs.org/en',
    text: 'Node JS',
    icon: (
      <i
        className="fab fa-node-js"
        style={{ fontSize: 24, color: '#026e00' }}
        aria-hidden
      />
    ),
    color: colors.green[900],
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    item: {
      padding: theme.spacing(1, 4),
    },
  })
);

const Technical = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      {stack.map((tech) => (
        <Grid item key={tech.text} className={classes.item}>
          <Technology
            icon={tech.icon}
            text={tech.text}
            url={tech.url}
            color={tech.color}
          ></Technology>
        </Grid>
      ))}
    </Grid>
  );
};

export default Technical;
