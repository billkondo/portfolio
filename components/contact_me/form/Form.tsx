import { Grid, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import useForm, { FormKeyType } from './useForm';
import FormTextField from './FormTextfield';

const Form = () => {
  const { form, setForm } = useForm();

  const _onChange = (key: FormKeyType) => (value: string) =>
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
        ></FormTextField>
      </Grid>

      <Grid item container style={{ marginTop: 16 }}>
        <FormTextField
          value={form.contact}
          onChange={_onChange('contact')}
          label="Your contact"
          fullWidth={true}
        ></FormTextField>
      </Grid>

      <Grid item container style={{ marginTop: 40 }}>
        <FormTextField
          value={form.message}
          onChange={_onChange('message')}
          label="Message"
          fullWidth={true}
          multiline={true}
        ></FormTextField>
      </Grid>

      <Grid item container justify="flex-end" style={{ marginTop: 16 }}>
        <Button endIcon={<Send></Send>}>Send Me</Button>
      </Grid>
    </Grid>
  );
};

export default Form;
