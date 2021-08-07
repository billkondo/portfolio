import { FunctionComponent } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import Telegram from '@iconify/icons-logos/telegram';

type Props = {
  inline?: boolean;
};
const TelegramIcon: FunctionComponent<Props> = ({ inline = false }) => {
  const style = {
    width: 24,
    height: 24,
  };

  return inline ? (
    <InlineIcon icon={Telegram} style={style}></InlineIcon>
  ) : (
    <Icon icon={Telegram} style={style}></Icon>
  );
};

export default TelegramIcon;
