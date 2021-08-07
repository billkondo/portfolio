import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

const TranslationKeys = [
  'TITLE',

  'BOOKMARK',
  'LIKE',
  'MOST_RATED',
  'CREATE_EDIT',
] as const;
type RecipesShareTranslations = {
  [key in typeof TranslationKeys[number]]: string;
};

const useRecipesShareTranslations = () => {
  const { t } = useTranslation('recipes_share');

  const translations: RecipesShareTranslations = useMemo(() => {
    const dict = {};

    for (const key of TranslationKeys) dict[key] = t(key);

    return dict as RecipesShareTranslations;
  }, [t]);

  return translations;
};

export default useRecipesShareTranslations;
