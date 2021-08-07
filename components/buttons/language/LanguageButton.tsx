import { useMemo } from 'react';
import {
  colors,
  createStyles,
  IconButton,
  ListItemIcon,
  ListItemText,
  makeStyles,
  MenuItem,
  Typography,
} from '@material-ui/core';
import ReactCountryFlag from 'react-country-flag';

import Languages from 'config/languages';

import MenuPopover from 'components/popover/MenuPopover';

import useLanguageButton from './useLanguageButton';
import useCommonTranslations from 'components/translations/useCommonTranslations';

const languages = (params: { EN: string; PTBR: string }) => [
  {
    label: params.EN,
    code: 'US',
    language: Languages.EN,
  },
  {
    label: params.PTBR,
    code: 'BR',
    language: Languages.PT_BR,
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    selectedEN: {
      backgroundColor: colors.red[100],
    },
    selectedBR: {
      backgroundColor: colors.green[100],
    },
  })
);
const LanguageButton = () => {
  const classes = useStyles();
  const { EN, PTBR } = useCommonTranslations();
  const { selectedLanguage, changeLanguage } = useLanguageButton();

  const _languages = useMemo(() => languages({ EN, PTBR }), [EN, PTBR]);

  const USselected = selectedLanguage === Languages.EN;

  return (
    <MenuPopover
      renderButton={(onClick) => (
        <IconButton onClick={onClick} style={{ height: 56, width: 56 }}>
          <ReactCountryFlag
            countryCode={USselected ? 'US' : 'BR'}
            svg
            style={{ borderRadius: 8, height: 32, width: 32 }}
            title={`${USselected ? 'US' : 'BR'} Flag`}
          ></ReactCountryFlag>
        </IconButton>
      )}
    >
      {_languages.map((item) => {
        const selected = selectedLanguage === item.language;
        const isEN = item.language === Languages.EN;

        return (
          <MenuItem
            key={item.language}
            selected={selected}
            onClick={() => changeLanguage(item.language)}
            style={{
              backgroundColor: selected
                ? isEN
                  ? colors.red[100]
                  : colors.green[100]
                : '',
            }}
          >
            <ListItemIcon>
              <ReactCountryFlag
                countryCode={item.code}
                svg
                style={{ borderRadius: 8, height: 32, width: 32 }}
              ></ReactCountryFlag>
            </ListItemIcon>

            <ListItemText>
              <Typography
                variant="body1"
                style={{ fontWeight: selected ? 700 : 200 }}
              >
                {item.label}
              </Typography>
            </ListItemText>
          </MenuItem>
        );
      })}
    </MenuPopover>
  );
};

export default LanguageButton;
