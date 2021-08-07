import { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { Trans } from 'next-i18next';

import {
  ContactMeFormError,
  SIZE_EXCEEDED,
} from 'domain/contact_me/types/ContactMeFormErrors';

const useStyles = makeStyles((theme) =>
  createStyles({
    errorText: {
      color: theme.palette.error.dark,
      textAlign: 'right',
    },
  })
);

type Props = {
  error: ContactMeFormError;
};
const FormErrorText: FC<Props> = ({ error }) => {
  const classes = useStyles();
  const { message } = error;

  const limit = (error as SIZE_EXCEEDED).limit;

  return (
    <i className={classes.errorText}>
      <Trans components={{ b: <b /> }} values={{ limit }}>
        {message}
      </Trans>
    </i>
  );
};

export default FormErrorText;
