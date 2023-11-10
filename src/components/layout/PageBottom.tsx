import { Link } from 'react-router-dom';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useMediaQuery } from '@mui/material';

const LinkWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #00000020;
  padding: 2rem 0 0;
  margin-top: 4rem;
`;

type PageBottom = {
  leftButton: { name: string; link: string };
  rightButton?: { name: string; link: string };
};

const PageBottom = ({ leftButton, rightButton }: PageBottom) => {
  const isMobile = useMediaQuery('(max-width:736px)');
  return (
    <LinkWrapp>
      <Button
        color="secondary"
        startIcon={<HiArrowLongLeft />}
        component={Link}
        to={leftButton.link}
        size={isMobile ? 'small' : 'medium'}
      >
        {leftButton.name}
      </Button>
      {rightButton && (
        <Button
          color="secondary"
          endIcon={<HiArrowLongRight />}
          component={Link}
          to={rightButton.link}
          size={isMobile ? 'small' : 'medium'}
        >
          {rightButton.name}
        </Button>
      )}
    </LinkWrapp>
  );
};
export default PageBottom;
