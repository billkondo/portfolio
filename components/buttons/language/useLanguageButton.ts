import { useRouter } from 'next/router';

const useLanguageButton = () => {
  const { locale, push } = useRouter();

  const changeLanguage = (language: string) =>
    push('/', '/', { locale: language });

  const selectedLanguage = locale;

  return {
    selectedLanguage,
    changeLanguage,
  };
};

export default useLanguageButton;
