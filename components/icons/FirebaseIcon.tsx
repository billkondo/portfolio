import { FunctionComponent } from 'react';

type Props = {
  height?: number;
  width?: number;
};
const FirebaseIcon: FunctionComponent<Props> = ({
  height = 24,
  width = 24,
}) => {
  return (
    <img
      src="https://img.icons8.com/color/48/000000/firebase.png"
      style={{ height, width }}
      alt="Firebase icon"
    />
  );
};

export default FirebaseIcon;
