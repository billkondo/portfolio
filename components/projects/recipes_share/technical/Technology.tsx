import { FC } from 'react';
import { Chip, createStyles, makeStyles } from '@material-ui/core';

type StylesProps = {
  color: string;
};
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      height: theme.spacing(5),
      fontWeight: 700,
      borderColor: (props: StylesProps) =>
        props.color ?? theme.palette.text.secondary,
    },
  })
);

type Props = {
  url: string;
  icon: JSX.Element;
  text: string;
  color?: string;
};
const Technology: FC<Props> = ({ url, icon, text, color }) => {
  const classes = useStyles({ color });

  return (
    <Chip
      icon={icon}
      label={text}
      clickable
      component="a"
      href={url}
      target="_blank"
      rel="noreferrer"
      variant="outlined"
      classes={{
        root: classes.root,
      }}
    ></Chip>
  );
};

export default Technology;
