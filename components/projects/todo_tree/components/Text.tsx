import { FC } from 'react';
import { Typography, TypographyVariant } from '@material-ui/core';
import { Property } from 'csstype';

import useBreakpoint from 'hooks/useBreakpoint';

type Props = {
  variant?: TypographyVariant;
  textAlign?: Property.TextAlign;
};
const Text: FC<Props> = ({ variant, children, textAlign }) => {
  const isLG = useBreakpoint('lg');

  return (
    <Typography
      variant={variant}
      style={{
        fontFamily: 'Inika',
        textAlign: textAlign ?? (isLG ? 'inherit' : 'center'),
        lineHeight: 1.5,
      }}
    >
      {children}
    </Typography>
  );
};

export default Text;
