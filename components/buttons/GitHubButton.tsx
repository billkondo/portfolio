import { colors } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import URLs from 'config/urls';

import SocialButton from './SocialButton';

const GitHubButton = () => {
  return (
    <SocialButton
      color={colors.grey[900]}
      backgroundColor={colors.grey[200]}
      icon={<GitHub></GitHub>}
      label="GitHub"
      link={URLs.GitHub}
    ></SocialButton>
  );
};

export default GitHubButton;
