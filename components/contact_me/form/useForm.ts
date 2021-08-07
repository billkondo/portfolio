import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import LoadStatus, { DONE, ERROR, LOADING, SUBMIT } from 'config/load_status';

import ContactMeForm from 'domain/contact_me/types/ContactMeForm';
import ContactMeFormErrors from 'domain/contact_me/types/ContactMeFormErrors';
import submitContactMeForm from 'domain/contact_me/usecases/submitContactMeForm';

import useValidateContactMeForm from 'domain/contact_me/usecases/validate/useValidateContacMeForm';

import useContactMeTranslations from 'components/translations/useContactMeTranslations';

const initialForm: ContactMeForm = {
  name: '',
  contact: '',
  message: '',
};

const useForm = () => {
  const { SUCCESS_MESSAGE, ERROR_MESSAGE } = useContactMeTranslations();
  const validateContactMeForm = useValidateContactMeForm();
  const { enqueueSnackbar } = useSnackbar();

  const [form, setForm] = useState<ContactMeForm>(initialForm);
  const [errors, setErrors] = useState<ContactMeFormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<LoadStatus>();

  useEffect(() => {
    if (submitStatus !== SUBMIT) return;

    setSubmitStatus(LOADING);

    setErrors({});

    const post = async () => {
      try {
        await submitContactMeForm(form);

        setSubmitStatus(DONE);
        setForm(initialForm);
        enqueueSnackbar(SUCCESS_MESSAGE, {
          variant: 'success',
        });
      } catch (error) {
        setSubmitStatus(ERROR);
        enqueueSnackbar(ERROR_MESSAGE, {
          variant: 'error',
        });

        throw error;
      }
    };
    post();
  }, [submitStatus]);

  const submitForm = () => {
    if (submitStatus === SUBMIT) return;
    if (submitStatus === LOADING) return;

    const errors = validateContactMeForm(form);

    if (errors) {
      setSubmitStatus(ERROR);
      setErrors(errors || {});
    } else setSubmitStatus(SUBMIT);
  };

  const onChange = (newForm: ContactMeForm) => {
    if (submitStatus === ERROR) {
      const newErrors = validateContactMeForm(newForm);
      setErrors(newErrors || {});
    }

    setForm(newForm);
  };

  return {
    form,
    setForm: onChange,
    submitForm,
    errors,
    isSubmiting: submitStatus === LOADING,
  };
};

export default useForm;
