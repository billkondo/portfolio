import { FunctionComponent } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import Gmail from '@iconify/icons-logos/google-gmail';

type Props = {
  inline?: boolean;
};
const GmailIcon: FunctionComponent<Props> = ({ inline = false }) => {
  return inline ? (
    <InlineIcon icon={Gmail}></InlineIcon>
  ) : (
    <Icon icon={Gmail}></Icon>
  );
};

export default GmailIcon;
