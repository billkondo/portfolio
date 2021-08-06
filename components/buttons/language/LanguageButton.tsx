import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from '@material-ui/core';
import ReactCountryFlag from 'react-country-flag';

import Languages from 'config/languages';

import MenuPopover from 'components/popover/MenuPopover';

import useLanguageButton from './useLanguageButton';

const languages = [
  {
    label: 'English',
    code: 'US',
    language: Languages.EN,
  },
  {
    label: 'Portuguese (BR)',
    code: 'BR',
    language: Languages.PT_BR,
  },
];

const LanguageButton = () => {
  const { selectedLanguage, changeLanguage } = useLanguageButton();

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
      {languages.map((item) => (
        <MenuItem
          key={item.language}
          selected={selectedLanguage === item.language}
          onClick={() => changeLanguage(item.language)}
        >
          <ListItemIcon>
            <ReactCountryFlag
              countryCode={item.code}
              svg
              style={{ borderRadius: 8, height: 32, width: 32 }}
            ></ReactCountryFlag>
          </ListItemIcon>

          <ListItemText>
            <Typography> {item.label} </Typography>
          </ListItemText>
        </MenuItem>
      ))}
    </MenuPopover>
  );
};

export default LanguageButton;
