import { FunctionComponent, useState } from 'react';
import { Collapse, Grid, Button, colors, makeStyles } from '@material-ui/core';

import useButtonStyles from './styles/useButtonStyles';

const useStyles = makeStyles({
  root: {
    color: colors.grey[200],
    fontFamily: 'Varela Round, sans-serif',
    width: '100%',
    fontSize: '24px',
  },
  item: {
    marginLeft: 8,
    flexGrow: 1,
  },
});

type Props = {
  label: string;
  renderSubTree: () => JSX.Element;
};

const Node: FunctionComponent<Props> = ({ label, renderSubTree }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { button } = useButtonStyles();

  const _onClick = () => setOpen(!open);

  return (
    <Grid container direction="column">
      <Grid item container className={classes.root} alignItems="center">
        <Grid item>
          <b>
            [<Sign open={open}></Sign>]
          </b>
        </Grid>

        <Grid item className={classes.item}>
          <Button fullWidth className={button} onClick={_onClick}>
            <b>{label}</b>
          </Button>
        </Grid>
      </Grid>

      <Collapse in={open}>
        <Grid item container>
          {renderSubTree()}
        </Grid>
      </Collapse>
    </Grid>
  );
};

type SignProps = {
  open: boolean;
};
const Sign: FunctionComponent<SignProps> = ({ open }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        width: 16,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {open ? '-' : '+'}
      </div>
    </div>
  );
};

export default Node;
