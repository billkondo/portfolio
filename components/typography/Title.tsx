import { FunctionComponent } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Property } from 'csstype';

type StylesProps = {
  textAlign: Property.TextAlign;
};
const useStyles = makeStyles({
  root: {
    fontFamily: 'Varela Round, sans-serif',
    lineHeight: 1.5,
    textAlign: (props: StylesProps) => props.textAlign,
  },
});

type Props = {
  textAlign?: Property.TextAlign;
};
const Title: FunctionComponent<Props> = ({
  children,
  textAlign = 'center',
}) => {
  const classes = useStyles({ textAlign });

  return (
    <Typography variant="h4" className={classes.root}>
      {children}
    </Typography>
  );
};

export default Title;
