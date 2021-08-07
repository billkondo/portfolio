import { Grid, makeStyles } from '@material-ui/core';

import Email from 'config/email';

import Description from 'components/typography/Description';
import SubTitle from 'components/typography/Subtitle';
import useContactMeTranslations from 'components/translations/useContactMeTranslations';

import Form from './form/Form';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

const ContactMe = () => {
  const translations = useContactMeTranslations();
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item container>
        <Description>{translations.SEND_EMAIL}</Description>
      </Grid>

      <Grid item container justify="flex-end">
        <SubTitle>{Email}</SubTitle>
      </Grid>

      <Grid item container style={{ flex: 1 }}></Grid>

      <Grid item container>
        <Description>{translations.TEXT_ME}...</Description>
      </Grid>

      <Grid item container style={{ marginTop: 32 }}>
        <Form></Form>
      </Grid>

      <Grid item container style={{ flex: 1 }}></Grid>
    </Grid>
  );
};

export default ContactMe;
