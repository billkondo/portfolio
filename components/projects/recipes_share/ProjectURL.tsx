import { Button, colors, withStyles } from '@material-ui/core';
import { Link } from '@material-ui/icons';

import URLs from 'config/urls';

const StyledButton = withStyles({
  root: {
    fontSize: 24,
    borderRadius: 8,
    color: colors.red[900],
    fontFamily: 'Varela Round, sans-serif',
    '&:hover': {
      backgroundColor: colors.red[50],
    },
    '& .MuiButton-iconSizeMedium': {
      color: colors.red[900],
      fontSize: 32,
      '& > *:first-child': {
        fontSize: 'inherit',
      },
    },
  },
})(Button);

const ProjectURL = () => {
  return (
    <a href={URLs.Projects.RecipesShare} target="_blank">
      <StyledButton startIcon={<Link></Link>}>
        <b>URL</b>
      </StyledButton>
    </a>
  );
};

export default ProjectURL;
