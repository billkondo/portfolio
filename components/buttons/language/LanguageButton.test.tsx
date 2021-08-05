import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LanguageButton from 'components/buttons/language/LanguageButton';

describe('LanguageButton', () => {
  test('It should show languages menu when language button is clicked', () => {
    render(<LanguageButton></LanguageButton>);

    const flagButton = screen.getByTitle('Flag Button');
    userEvent.click(flagButton);

    screen.getByText('English');
  });
});
