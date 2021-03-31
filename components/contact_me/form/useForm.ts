import { useState } from 'react';

export type FormKeyType = 'name' | 'contact' | 'message';
type FormProps = {
  name: string;
  contact: string;
  message: string;
};
const initialForm: FormProps = {
  name: '',
  contact: '',
  message: '',
};

const useForm = () => {
  const [form, setForm] = useState<FormProps>(initialForm);

  return { form, setForm };
};

export default useForm;
