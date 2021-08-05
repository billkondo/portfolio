declare module 'react-country-flag' {
  import { FC } from 'react';
  import { CSSProperties } from '@material-ui/core/styles/withStyles';

  type ReactCountryFlagProps = {
    countryCode?: string;
    svg?: boolean;
    style?: CSSProperties;
  };
  const ReactCountryFlag: FC<ReactCountryFlagProps>;

  export default ReactCountryFlag;
}
