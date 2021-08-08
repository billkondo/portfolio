import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';

import Languages from 'config/languages';
import LanguageButton from 'components/buttons/language/LanguageButton';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('components/translations/useCommonTranslations', () => {
  return () => ({
    EN: 'English',
    PTBR: 'Portuguese (BR)',
  });
});

describe('LanguageButton', () => {
  const setup = (locale = Languages.EN) => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: '/',
      route: '/',
      asPath: '/',
      query: '',
      locale,
    }));
  };

  test('It should show languages menu when language button is clicked', () => {
    setup();

    render(<LanguageButton></LanguageButton>);

    const flagButton = screen.getByTitle('US Flag');
    userEvent.click(flagButton);

    screen.getByText('English');
  });

  test('It should show Brazil flag when locale is ptBR', () => {
    setup(Languages.PT_BR);

    render(<LanguageButton></LanguageButton>);

    screen.getByTitle('BR Flag');
  });

  test('It should show USA flag when locale is en', () => {
    setup(Languages.EN);

    render(<LanguageButton></LanguageButton>);

    screen.getByTitle('US Flag');
  });
});
