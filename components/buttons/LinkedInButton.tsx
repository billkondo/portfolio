import { colors } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';

import URLs from 'config/urls';

import SocialButton from './SocialButton';

const LinkedInButton = () => {
  return (
    <SocialButton
      backgroundColor={colors.blue[50]}
      color={colors.blue[900]}
      icon={<LinkedIn fontSize="inherit"></LinkedIn>}
      label={'LinkedIn'}
      link={URLs.LinkedIn}
    ></SocialButton>
  );
};

export default LinkedInButton;
