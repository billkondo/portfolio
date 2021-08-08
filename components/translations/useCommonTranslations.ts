import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

const TranslationKeys = [
  'CONTACT_ME',
  'PROJECTS',

  'RESUME',

  'EN',
  'PTBR',

  'CONTACTS',
] as const;
type CommonTranslations = {
  [key in typeof TranslationKeys[number]]: string;
};

const useCommonTranslations = () => {
  const { t } = useTranslation('common');

  const translations: CommonTranslations = useMemo(() => {
    const dict = {};

    for (const key of TranslationKeys) dict[key] = t(key);

    return dict as CommonTranslations;
  }, [t]);

  return translations;
};

export default useCommonTranslations;
