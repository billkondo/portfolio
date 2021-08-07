import ContactMeForm from 'domain/contact_me/types/ContactMeForm';
import ContactMeFormErrors, {
  EMPTY,
  SIZE_EXCEEDED,
} from 'domain/contact_me/types/ContactMeFormErrors';

import useContactMeTranslations from 'components/translations/useContactMeTranslations';
import {
  MULTI_LINE_MAX_LENGTH,
  SINGLE_LINE_MAX_LENGTH,
} from './validateContactMeConstraints';

const useValidateContactMeForm = () => {
  const {
    NAME_EMPTY,
    NAME_TOO_BIG,
    CONTACT_EMPTY,
    CONTACT_TOO_BIG,
    MESSAGE_EMPTY,
    MESSAGE_TOO_BIG,
  } = useContactMeTranslations();

  const validate = (form: ContactMeForm) => {
    const errors: ContactMeFormErrors = {};

    const name = (form.name || '').trim();
    if (!name.length) errors.name = new EMPTY(NAME_EMPTY);
    if (name.length > SINGLE_LINE_MAX_LENGTH)
      errors.name = new SIZE_EXCEEDED(NAME_TOO_BIG, SINGLE_LINE_MAX_LENGTH);

    const contact = (form.contact || '').trim();
    if (!contact.length) errors.contact = new EMPTY(CONTACT_EMPTY);
    if (contact.length > SINGLE_LINE_MAX_LENGTH)
      errors.contact = new SIZE_EXCEEDED(
        CONTACT_TOO_BIG,
        SINGLE_LINE_MAX_LENGTH
      );

    const message = (form.message || '').trim();
    if (!message.length) errors.message = new EMPTY(MESSAGE_EMPTY);
    if (message.length > MULTI_LINE_MAX_LENGTH)
      errors.message = new SIZE_EXCEEDED(
        MESSAGE_TOO_BIG,
        MULTI_LINE_MAX_LENGTH
      );

    if (!Object.keys(errors).length) return null;
    return errors;
  };

  return validate;
};

export default useValidateContactMeForm;
