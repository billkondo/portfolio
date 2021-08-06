import {
  alpha,
  AppBar,
  createStyles,
  Grid,
  makeStyles,
  Toolbar,
} from '@material-ui/core';

import LanguageButton from 'components/buttons/language/LanguageButton';

import { DESKTOP_HEIGHT, MOBILE_HEIGHT } from './navbarConfig';

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      boxShadow: 'none',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      backgroundColor: alpha(theme.palette.background.default, 0.4),
    },
    toolBar: {
      height: MOBILE_HEIGHT,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 6),
      },
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(0, 12),
        height: DESKTOP_HEIGHT,
      },
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar disableGutters className={classes.toolBar}>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Grid item>
            <LanguageButton></LanguageButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
