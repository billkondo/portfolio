import { FunctionComponent } from 'react';

type Props = {
  height?: number;
  width?: number;
};
const CloudFunctionsIcon: FunctionComponent<Props> = ({
  height = 24,
  width = 24,
}) => {
  return (
    <img
      src="/CloudFunctions.svg"
      style={{ height, width }}
      alt="Cloud Functions for Firebase Icon"
    />
  );
};

export default CloudFunctionsIcon;
