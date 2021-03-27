import { useMediaQuery, useTheme } from '@material-ui/core';

const useIsUpSM = () => {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up('sm'));

  return isUpSM;
};

export default useIsUpSM;
