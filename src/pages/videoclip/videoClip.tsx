import * as L from '../../layout/main_styles'; // L - layout

import { selectLanguage } from '../../redusers/langSlice';
import { useSelector } from 'react-redux';

import Videos from './videos';

import video from '../../assets/images/video_bknd.jpg';

import { texts } from './texts';

const VideoClip = () => {
  const language = useSelector(selectLanguage);

  return (
    <L.Page>
      <L.Section $page>
        <L.SectionImageWrapper>
          <L.Heading $page>
            <L.SectionTitle>{texts[language].head}</L.SectionTitle>
          </L.Heading>
          <L.SectionImage src={video} alt="video" />
        </L.SectionImageWrapper>
        <L.Wrapper>
          <L.Container>
            <L.SectionTitle $dark $page>
              {texts[language].title}
            </L.SectionTitle>

            <L.SectionDesc $paragraph $dark>
              {texts[language].paragraph}
            </L.SectionDesc>
            <L.SectionTitle $page $dark $h3>
              {texts[language].portfolio}
            </L.SectionTitle>
            <Videos />
          </L.Container>
        </L.Wrapper>
      </L.Section>
    </L.Page>
  );
};

export default VideoClip;
