declare module 'react-country-flag' {
  import { FC } from 'react';

  type ReactCountryFlagProps = {
    countryCode?: string;
    svg?: boolean;
  };
  const ReactCountryFlag: FC<ReactCountryFlagProps>;

  export default ReactCountryFlag;
}
