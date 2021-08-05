import { Grid, IconButton, Typography } from '@material-ui/core';
import ReactCountryFlag from 'react-country-flag';

import MenuPopover from 'components/popover/MenuPopover';

const LanguageButton = () => {
  return (
    <MenuPopover
      renderButton={(onClick) => (
        <IconButton onClick={onClick} style={{ height: 56, width: 56 }}>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{ borderRadius: 8, height: 32, width: 32 }}
            title="Flag Button"
          ></ReactCountryFlag>
        </IconButton>
      )}
    >
      <Grid container direction="column">
        <Grid item container>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{ borderRadius: 8, height: 32, width: 32 }}
          ></ReactCountryFlag>

          <Typography> English</Typography>
        </Grid>

        <Grid item container>
          <ReactCountryFlag
            countryCode="BR"
            svg
            style={{ borderRadius: 8, height: 32, width: 32 }}
          ></ReactCountryFlag>

          <Typography> Portuguese (BR) </Typography>
        </Grid>
      </Grid>
    </MenuPopover>
  );
};

export default LanguageButton;
