import { FunctionComponent } from 'react';
import { InlineIcon, Icon } from '@iconify/react';
import Firebase from '@iconify/icons-logos/firebase';

type Props = {
  inline?: boolean;
};
const FirebaseIcon: FunctionComponent<Props> = ({ inline }) => {
  const style = {
    width: 24,
    height: 24,
  };

  return inline ? (
    <InlineIcon icon={Firebase} style={style}></InlineIcon>
  ) : (
    <Icon icon={Firebase} style={style}></Icon>
  );
};

export default FirebaseIcon;
