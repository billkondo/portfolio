import { FC } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import GmailIcon from 'components/icons/GmailIcon';
import PhoneIcon from 'components/icons/PhoneIcon';
import TelegramIcon from 'components/icons/TelegramIcon';

const useStyles = makeStyles({
  footerBody: {
    minWidth: 240,
  },
  title: {
    margin: 8,
    fontFamily: 'Varela Round, sans-serif',
  },
});

const Contacts = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.footerBody}>
      <Grid item container>
        <Typography variant="h6" className={classes.title}>
          <b>Contacts</b>
        </Typography>
      </Grid>

      <Grid item container>
        <Column>
          <Item>
            <TelegramIcon inline></TelegramIcon>
          </Item>

          <Item>
            <GmailIcon inline></GmailIcon>
          </Item>

          <Item>
            <PhoneIcon inline></PhoneIcon>
          </Item>
        </Column>

        <Column>
          <Item>
            <Typography variant="body1">@bill_kondo</Typography>
          </Item>

          <Item>
            <Typography variant="body1">willkondo@gmail.com</Typography>
          </Item>

          <Item>
            <Typography variant="body1">(+55) 11 99736 5087</Typography>
          </Item>
        </Column>
      </Grid>
    </Grid>
  );
};

const Item: FC = ({ children }) => {
  return (
    <div
      style={{
        fontFamily: 'Varela Round, sans-serif',
        margin: 8,
        height: 32,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

const Column: FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
  );
};

export default Contacts;
