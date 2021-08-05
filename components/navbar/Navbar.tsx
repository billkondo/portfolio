import {
  alpha,
  AppBar,
  createStyles,
  Grid,
  makeStyles,
  Toolbar,
} from '@material-ui/core';

import LanguageButton from 'components/buttons/language/LanguageButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      boxShadow: 'none',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      backgroundColor: alpha(theme.palette.background.default, 0.72),
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <LanguageButton></LanguageButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
