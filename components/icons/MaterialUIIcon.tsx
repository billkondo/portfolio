import { FunctionComponent } from 'react';

type Props = {
  height?: number;
  width?: number;
};
const MaterialUIIcon: FunctionComponent<Props> = ({
  height = 24,
  width = 24,
}) => {
  return (
    <img
      src="https://img.icons8.com/color/50/000000/material-ui.png"
      style={{ height, width }}
      alt="Material UI icon"
    />
  );
};

export default MaterialUIIcon;
