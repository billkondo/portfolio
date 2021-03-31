import { Grid, makeStyles } from '@material-ui/core';

import Email from 'config/email';

import Description from 'components/typography/Description';
import SubTitle from 'components/typography/Subtitle';

import Form from './form/Form';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

const ContactMe = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item container>
        <Description>Send an email to</Description>
      </Grid>

      <Grid item container justify="flex-end">
        <SubTitle>{Email}</SubTitle>
      </Grid>

      <Grid item container style={{ flex: 1 }}></Grid>

      <Grid item container>
        <Description>or text me ...</Description>
      </Grid>

      <Grid item container style={{ marginTop: 32 }}>
        <Form></Form>
      </Grid>

      <Grid item container style={{ flex: 1 }}></Grid>
    </Grid>
  );
};

export default ContactMe;
