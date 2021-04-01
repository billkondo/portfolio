import { useState, useEffect } from 'react';

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

  useEffect(() => {
    if (submitStatus !== LoadStatus.LOADING) return;

    setErrors({});

    const post = async () => {
      try {
        await submitContactMeForm(form);
        setSubmitStatus(LoadStatus.DONE);
      } catch (error) {
        if (error instanceof ValidationError) {
          setErrors(error.errors);
          setSubmitStatus(LoadStatus.ERROR);
          return;
        }
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
