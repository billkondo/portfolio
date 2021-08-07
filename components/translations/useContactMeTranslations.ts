import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

const TranslationsKeys = [
  'SEND_EMAIL',
  'TEXT_ME',
  'YOUR_NAME',
  'YOUR_CONTACT',
  'MESSAGE',
  'SEND_ME',

  'NAME_EMPTY',
  'CONTACT_EMPTY',
  'MESSAGE_EMPTY',

  'NAME_TOO_BIG',
  'CONTACT_TOO_BIG',
  'MESSAGE_TOO_BIG',

  'SUCCESS_MESSAGE',
  'ERROR_MESSAGE',
] as const;
type ContactMeTranslations = {
  [key in typeof TranslationsKeys[number]]: string;
};

const useContactMeTranslations = () => {
  const { t } = useTranslation('contact_me');

  const translations: ContactMeTranslations = useMemo(() => {
    const dict = {};

    for (const key of TranslationsKeys)
      dict[key] = t(key, { limit: '{{limit}}' });

    return dict as ContactMeTranslations;
  }, [t]);

  return translations;
};

export default useContactMeTranslations;
