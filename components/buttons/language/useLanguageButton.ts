import { useRouter } from 'next/router';

const useLanguageButton = () => {
  const { locale, push } = useRouter();

  const selectedLanguage = locale;

  const changeLanguage = (language: string) => {
    if (selectedLanguage === language) return;

    push('/', '/', { locale: language });
  };

  return {
    selectedLanguage,
    changeLanguage,
  };
};

export default useLanguageButton;
