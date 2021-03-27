import { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';

import useButtonStyles from './styles/useButtonStyles';

type Props = {
  label: string;
  onClick: () => void;
};

const Leaf: FunctionComponent<Props> = ({ label, onClick }) => {
  const { button } = useButtonStyles();

  return (
    <Button fullWidth className={button} onClick={onClick}>
      <b>
        <i>{label}</i>
      </b>
    </Button>
  );
};

export default Leaf;
