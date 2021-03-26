import { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';

import useButtonStyles from './styles/useButtonStyles';

type Props = {
  label: string;
};

const Leaf: FunctionComponent<Props> = ({ label }) => {
  const { button } = useButtonStyles();

  return (
    <Button fullWidth className={button}>
      <b>
        <i>{label}</i>
      </b>
    </Button>
  );
};

export default Leaf;
