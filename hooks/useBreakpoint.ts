import { useMediaQuery, useTheme } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

const useBreakpoint = (breakpoint: Breakpoint) => {
  const theme = useTheme();
  const upper = useMediaQuery(theme.breakpoints.up(breakpoint));

  return upper;
};

export default useBreakpoint;
