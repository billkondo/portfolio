import { FunctionComponent } from 'react';

type Props = {
  height?: number;
  width?: number;
};
const GmailIcon: FunctionComponent<Props> = ({ height = 24, width = 24 }) => {
  return (
    <img
      src="https://img.icons8.com/fluent/48/000000/gmail--v1.png"
      style={{ height, width }}
      alt="Gmail icon"
    />
  );
};

export default GmailIcon;
