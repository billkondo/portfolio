import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import LoadStatus, { LoadStatusValue } from 'config/load_status';

import ContactMeForm from 'domain/contact_me/types/ContactMeForm';
import ContactMeFormErrors from 'domain/contact_me/types/ContactMeFormErrors';

import submitContactMeForm, {
  ValidationError,
} from 'domain/contact_me/usecases/submitContactMeForm';
import validateContactMeForm from 'domain/contact_me/usecases/validateContactMeForm';

const initialForm: ContactMeForm = {
  name: '',
  contact: '',
  message: '',
};

const useForm = () => {
  const [form, setForm] = useState<ContactMeForm>(initialForm);
  const [errors, setErrors] = useState<ContactMeFormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<LoadStatusValue>(null);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (submitStatus !== LoadStatus.LOADING) return;

    setErrors({});

    const post = async () => {
      try {
        await submitContactMeForm(form);

        setSubmitStatus(LoadStatus.DONE);
        setForm(initialForm);
        enqueueSnackbar('Message was sent successfully', {
          variant: 'success',
        });
      } catch (error) {
        if (error instanceof ValidationError) {
          setErrors(error.errors);
          setSubmitStatus(LoadStatus.ERROR);
          return;
        }

        setSubmitStatus(LoadStatus.ERROR);
        enqueueSnackbar('Failed to send message', {
          variant: 'error',
        });

        throw error;
      }
    };
    post();
  }, [submitStatus]);

  const submitForm = () => {
    if (submitStatus === LoadStatus.LOADING) return;
    setSubmitStatus(LoadStatus.LOADING);
  };

  const onChange = (newForm: ContactMeForm) => {
    if (submitStatus === LoadStatus.ERROR) {
      const newErrors = validateContactMeForm(newForm) || {};
      setErrors(newErrors);
    }

    setForm(newForm);
  };

  return {
    form,
    setForm: onChange,
    submitForm,
    errors,
    isSubmiting: submitStatus === LoadStatus.LOADING,
  };
};

export default useForm;
