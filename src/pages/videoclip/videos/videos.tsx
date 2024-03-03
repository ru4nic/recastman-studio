import { useState, Fragment } from 'react';
import {
  Wrapper,
  IconPlay,
  Desc,
  DescBlock,
  Iframe,
  Preview,
  StyledDialog,
} from './videos.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { videos } from './videos.data';

const Videos = () => {
  const [videoIndex, setVideoIndex] = useState<null | number>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (index: number) => {
    setOpen(true);
    setVideoIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mobileScreen = useMediaQuery('(max-width:600px)');
  const mobileScreenHorizontal = useMediaQuery('(max-height:420px)');
  return (
    <Wrapper>
      {videos.map((video, index) => {
        return (
          <Fragment key={video.id}>
            <Preview $src={video.src} onClick={() => handleClickOpen(index)}>
              <DescBlock>
                <Desc>{video.name}</Desc>
              </DescBlock>
              <IconPlay />
            </Preview>
            {videoIndex === index && (
              <StyledDialog
                open={open}
                onClose={handleClose}
                maxWidth={mobileScreenHorizontal ? 'xs' : 'lg'}
                fullWidth={
                  mobileScreen ? false : mobileScreenHorizontal ? true : true
                }
              >
                <Iframe
                  src={video.link}
                  style={{ border: 'none' }}
                  allowFullScreen
                />
              </StyledDialog>
            )}
          </Fragment>
        );
      })}
    </Wrapper>
  );
};
export default Videos;
