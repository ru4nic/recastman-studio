import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

type StyledButtonProps = {
  children: React.ReactNode;
  link: string;
};
export default function StyledButton({ children, link }: StyledButtonProps) {
  const mobileScreen = useMediaQuery('(max-width:600px)');
  const tabletScreen = useMediaQuery('(max-width:1000px)');
  return (
    <Button
      size={tabletScreen ? 'medium' : 'large'}
      fullWidth={mobileScreen ? true : false}
      variant="contained"
      color="error"
      component={Link}
      to={link}
      sx={{ textTransform: 'unset' }}
    >
      {children}
    </Button>
  );
}
