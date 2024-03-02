import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

type HideOnScrollProps = {
  children: React.ReactElement;
  window?: () => Window;
};
function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
export default HideOnScroll;
