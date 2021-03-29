import { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';

import Description from 'components/typography/Description';

const useStyles = makeStyles({
  link: {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: 16,
  },
});

type Props = {
  url: string;
  icon: JSX.Element;
  text: string;
};
const Technology: FunctionComponent<Props> = ({ url, icon, text }) => {
  const classes = useStyles();

  return (
    <a href={url} target="_blank" className={classes.link}>
      {icon}

      <div className={classes.text}>
        <Description>{text}</Description>
      </div>
    </a>
  );
};

export default Technology;
