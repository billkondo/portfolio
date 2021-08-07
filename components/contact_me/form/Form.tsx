import {
  Grid,
  Button,
  CircularProgress,
  colors,
  makeStyles,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';

import ContactMeFormKey from 'domain/contact_me/types/ContactMeFormKey';
import useContactMeTranslations from 'components/translations/useContactMeTranslations';

import useForm from './useForm';
import FormTextField from './FormTextField';

const useStyles = makeStyles({
  button: {
    color: 'rgba(0, 0, 0, 0.88)',
    '&:hover': {
      backgroundColor: colors.grey[300],
    },
  },
});

const Form = () => {
  const translations = useContactMeTranslations();
  const { form, setForm, errors, submitForm, isSubmiting } = useForm();
  const classes = useStyles();

  const _onChange = (key: ContactMeFormKey) => (value: string) =>
    setForm({
      ...form,
      [key]: value,
    });

  return (
    <Grid container direction="column">
      <Grid item container>
        <FormTextField
          value={form.name}
          onChange={_onChange('name')}
          label={translations.YOUR_NAME}
          fullWidth={true}
          error={errors.name}
        ></FormTextField>
      </Grid>

      <Grid item container style={{ marginTop: 16 }}>
        <FormTextField
          value={form.contact}
          onChange={_onChange('contact')}
          label={translations.YOUR_CONTACT}
          fullWidth={true}
          error={errors.contact}
        ></FormTextField>
      </Grid>

      <Grid item container style={{ marginTop: 32 }}>
        <FormTextField
          value={form.message}
          onChange={_onChange('message')}
          label={translations.MESSAGE}
          fullWidth={true}
          multiline={true}
          error={errors.message}
        ></FormTextField>
      </Grid>

      <Grid item container justifyContent="flex-end" style={{ marginTop: 16 }}>
        <Button
          startIcon={
            isSubmiting ? (
              <CircularProgress
                size={24}
                style={{ color: colors.grey[900] }}
              ></CircularProgress>
            ) : (
              <Send fontSize="small"></Send>
            )
          }
          onClick={submitForm}
          className={classes.button}
        >
          {translations.SEND_ME}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
