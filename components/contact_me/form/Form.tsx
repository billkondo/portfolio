import {
  Grid,
  Button,
  CircularProgress,
  colors,
  makeStyles,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';

import ContactMeFormKey from 'domain/contact_me/types/ContactMeFormKey';

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
          label="Your name"
          fullWidth={true}
          error={errors.name}
        ></FormTextField>
      </Grid>

      <Grid item container style={{ marginTop: 16 }}>
        <FormTextField
          value={form.contact}
          onChange={_onChange('contact')}
          label="Your contact"
          fullWidth={true}
          error={errors.contact}
        ></FormTextField>
      </Grid>

      <Grid item container style={{ marginTop: 32 }}>
        <FormTextField
          value={form.message}
          onChange={_onChange('message')}
          label="Message"
          fullWidth={true}
          multiline={true}
          error={errors.message}
        ></FormTextField>
      </Grid>

      <Grid item container justify="flex-end" style={{ marginTop: 16 }}>
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
          Send Me
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
