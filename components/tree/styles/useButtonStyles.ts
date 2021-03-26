import { colors, makeStyles } from '@material-ui/core';

const useButtonStyles = makeStyles({
  button: {
    padding: 0,
    paddingLeft: 8,
    fontSize: '24px',
    textTransform: 'none',
    color: colors.grey[200],
    justifyContent: 'flex-start',
    fontFamily: 'Varela Round, sans-serif',
    '&:hover': {
      backgroundColor: colors.grey[600],
    },
  },
});

export default useButtonStyles;
