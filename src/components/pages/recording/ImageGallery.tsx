import { styled } from 'styled-components';

import { borderRadius } from '../../layout/Vars';

const Grid = styled.div`
  display: grid;
  grid-template-areas: 'mics vox1' 'mics vox2';
  gap: 1em;
  margin: 6rem 0;

  @media (max-width: 736px) {
    gap: 0.5em;
  }
  @media (max-width: 480px) {
    grid-template-areas: 'vox2 vox2 vox1 vox1' '. mics mics .';
    gap: 0.5em;
  }
`;
const ImgLarge = styled.img`
  width: 100%;
  height: 100%;
  grid-area: mics;
  border-radius: ${borderRadius};
`;
const ImgTop = styled(ImgLarge)`
  aspect-ratio: 4/3;
  grid-area: vox1;
`;
const ImgBottom = styled(ImgTop)`
  grid-area: vox2;
`;
type ImageGalleryProps = {
  img1: string;
  img2: string;
  imgLarge: string;
};
const ImageGallery = ({ img1, img2, imgLarge }: ImageGalleryProps) => {
  return (
    <Grid>
      <ImgLarge src={imgLarge} alt="microphones" />
      <ImgTop src={img1} alt="vocalist1" />
      <ImgBottom src={img2} alt="recording" />
    </Grid>
  );
};

export default ImageGallery;
