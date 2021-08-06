import { useRouter } from 'next/dist/client/router';

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
