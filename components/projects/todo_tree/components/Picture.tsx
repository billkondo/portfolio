import { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

type StyleProps = {
  height: number;
};
const useStyles = makeStyles((theme) =>
  createStyles({
    image: {
      borderRadius: theme.spacing(1),
      objectFit: 'fill',
      height: (props: StyleProps) => props.height,
      width: '100%',
    },
  })
);

type Props = {
  path: string;
  height: number;
};
const Picture: FC<Props> = ({ path, height }) => {
  const classes = useStyles({ height });

  return <img src={path} className={classes.image}></img>;
};

export default Picture;
