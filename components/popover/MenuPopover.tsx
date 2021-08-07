import { FC, MouseEvent, useState } from 'react';
import { Popover } from '@material-ui/core';

type Props = {
  renderButton: (
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
  ) => JSX.Element;
};
const MenuPopover: FC<Props> = ({ renderButton, children }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = !!anchorEl;

  const onClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const onClose = () => setAnchorEl(null);

  return (
    <>
      {renderButton(onClick)}

      <Popover
        elevation={8}
        open={open}
        onClose={onClose}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {children}
      </Popover>
    </>
  );
};

export default MenuPopover;
