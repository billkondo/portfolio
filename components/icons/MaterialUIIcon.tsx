import { FunctionComponent } from 'react';
import { InlineIcon, Icon } from '@iconify/react';
import MaterialUI from '@iconify/icons-logos/material-ui';

type Props = {
  inline?: boolean;
};
const MaterialUIIcon: FunctionComponent<Props> = ({ inline }) => {
  return inline ? (
    <InlineIcon icon={MaterialUI}></InlineIcon>
  ) : (
    <Icon icon={MaterialUI}></Icon>
  );
};

export default MaterialUIIcon;
