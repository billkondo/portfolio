import { Grid, Typography, Icon, colors, makeStyles } from '@material-ui/core';
import { Telegram, Phone } from '@material-ui/icons';

import GmailIcon from 'components/icons/GmailIcon';

const black87 = 'rgba(0, 0, 0, 0.87)';
const useStyles = makeStyles({
  title: {
    margin: 8,
    fontFamily: 'Varela Round, sans-serif',
  },
  item: {
    fontFamily: 'Varela Round, sans-serif',
  },
  itemLeft: {
    margin: 8,
  },
  itemRight: {
    margin: 8,
    fontSize: 16,
    color: black87,
  },
});

const Contacts = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container>
        <Typography variant="h6" className={classes.title}>
          Contacts
        </Typography>
      </Grid>

      <Grid item container className={classes.item} style={{ marginTop: 16 }}>
        <Grid item className={classes.itemLeft}>
          <Icon style={{ color: '#0088CC' }}>
            <Telegram></Telegram>
          </Icon>
        </Grid>

        <Grid item className={classes.itemRight}>
          @bill_kondo
        </Grid>
      </Grid>

      <Grid item container className={classes.item}>
        <Grid item className={classes.itemLeft}>
          <GmailIcon></GmailIcon>
        </Grid>

        <Grid item className={classes.itemRight}>
          willkondo@gmail.com
        </Grid>
      </Grid>

      <Grid item container className={classes.item}>
        <Grid item className={classes.itemLeft}>
          <Icon style={{ color: colors.green[800] }}>
            <Phone></Phone>
          </Icon>
        </Grid>

        <Grid item className={classes.itemRight}>
          (+55) 11 99736 5087
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contacts;
