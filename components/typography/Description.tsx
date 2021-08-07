import { FunctionComponent } from 'react';
import { Trans } from 'next-i18next';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Delius, cursive',
    lineHeight: 1.5,
    fontSize: '1.25rem',
  },
});

type Props = {};
const Description: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant="body1" className={classes.root}>
      <Trans components={{ b: <b /> }}>{children}</Trans>
    </Typography>
  );
};

export default Description;
