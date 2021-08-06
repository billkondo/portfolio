import { useTranslation } from 'next-i18next';

const useCommonTranslations = () => {
  const { t } = useTranslation('common');

  const CONTACT_ME = t('CONTACT_ME');

  return {
    CONTACT_ME,
  };
};

export default useCommonTranslations;
