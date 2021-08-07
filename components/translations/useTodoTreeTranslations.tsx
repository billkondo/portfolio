import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

const TranslationKeys = [
  'VISUALIZE',
  'TREE_UI',
  'CREATE',
  'COMPLETE',

  'DESCRIPTION',

  'TEST_WITHOUT_ACCOUNT',
] as const;
type TodoTreeTranslations = {
  [key in typeof TranslationKeys[number]]: string;
};

const useTodoTreeTranslations = () => {
  const { t } = useTranslation('todo_tree');

  const translations: TodoTreeTranslations = useMemo(() => {
    const dict = {};

    for (const key of TranslationKeys) dict[key] = t(key);

    return dict as TodoTreeTranslations;
  }, [t]);

  return translations;
};

export default useTodoTreeTranslations;
