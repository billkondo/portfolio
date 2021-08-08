import { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Icon } from '@iconify/react';
import GitHub from '@iconify/icons-logos/github';
import LinkedIn from '@iconify/icons-logos/linkedin';

import URLs from 'config/urls';

import useCommonTranslations from 'components/translations/useCommonTranslations';

const Links = () => {
  const { RESUME } = useCommonTranslations();

  return (
    <Grid container justifyContent="center" alignItems="flex-end">
      <Link url={URLs.GitHub}>
        <Icon icon={GitHub} height={24}></Icon>
      </Link>

      <Link url={URLs.LinkedIn}>
        <Icon icon={LinkedIn} height={24}></Icon>
      </Link>

      <Link url={URLs.Resume}>
        <Typography variant="h5">
          <b style={{ textTransform: 'capitalize' }}>{RESUME}</b>
        </Typography>
      </Link>
    </Grid>
  );
};

type LinkProps = {
  url: string;
};
const Link: FC<LinkProps> = ({ url, children }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none', margin: 32 }}
    >
      {children}
    </a>
  );
};

export default Links;
