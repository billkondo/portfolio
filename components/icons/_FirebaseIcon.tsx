import { FunctionComponent } from 'react';
import { InlineIcon } from '@iconify/react';
import Firebase from '@iconify/icons-logos/firebase';

const FirebaseIcon: FunctionComponent = () => {
  const style = {
    width: 24,
    height: 24,
  };

  return <InlineIcon icon={Firebase} style={style}></InlineIcon>;
};

export default FirebaseIcon;
