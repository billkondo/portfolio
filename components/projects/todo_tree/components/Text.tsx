import { FC } from 'react';
import { Trans } from 'next-i18next';
import { Typography, TypographyVariant } from '@material-ui/core';
import { Property } from 'csstype';

import ProjectsConfig from 'config/projects';

import useBreakpoint from 'hooks/useBreakpoint';

type Props = {
  variant?: TypographyVariant;
  textAlign?: Property.TextAlign;
};
const Text: FC<Props> = ({ variant, children, textAlign }) => {
  const isLG = useBreakpoint('lg');

  return (
    <>
      <style jsx>{`
        b {
          color: ${ProjectsConfig.todoTree.theme.DARK};
        }
      `}</style>

      <Typography
        variant={variant}
        style={{
          fontFamily: 'Inika',
          textAlign: textAlign ?? (isLG ? 'inherit' : 'center'),
          lineHeight: 1.5,
        }}
      >
        <Trans components={{ b: <b /> }}>{children}</Trans>
      </Typography>
    </>
  );
};

export default Text;
