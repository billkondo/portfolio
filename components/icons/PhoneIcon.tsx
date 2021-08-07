import { FC } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import AndroidPhone from '@iconify/icons-flat-color-icons/phone-android';

type Props = {
  inline?: boolean;
};
const PhoneIcon: FC<Props> = ({ inline }) => {
  const style = {
    height: 24,
    width: 24,
  };

  return inline ? (
    <InlineIcon icon={AndroidPhone} style={style}></InlineIcon>
  ) : (
    <Icon icon={AndroidPhone} style={style}></Icon>
  );
};

export default PhoneIcon;
