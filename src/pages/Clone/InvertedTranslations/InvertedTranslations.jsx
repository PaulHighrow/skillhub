import useSize from '@react-hook/size';
import { Box } from 'components/Box/Box.styled';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import {
  NavigationItem,
  TranslationTextWrapper,
  TranslationsArrow,
  TranslationsBackground,
  TranslationsNavigation,
  TranslationsSection,
  TranslationsSubTitle,
  TranslationsTitle,
  TranslationsToggler,
  TranslationsWrapper,
  VideoBox,
  VideoLimiter,
} from './InvertedTranslations.styled';

export const InvertedTranslations = () => {
  const listItems = ['Англійська', 'Польська', 'Німецька'];

  const translationsEl = useRef();
  const videoUrls = [
    {
      mobileUrl: 'https://youtu.be/Ujz1YjEEqyk?si=8crApB-nqbzlqihQ',
      notMobileUrl:
        'https://youtube.com/shorts/H1aAX1Fk9_Y?si=IeCfKVC_lkdAi267',
    },
    {
      mobileUrl: 'https://youtu.be/RRKiBZi9moY?si=83dwA-AgfQRqIqZV',
      notMobileUrl:
        'https://youtube.com/shorts/8RcVZpGHlC0?si=Hg6MyOU_2VaLYcnW',
    },
    {
      mobileUrl: 'https://youtu.be/NEe6hl7msfs?si=V8YaLMy1gqtR6vys',
      notMobileUrl:
        'https://youtube.com/shorts/bUW-SjgUZ_8?si=HK713ekEFMpMbBAu',
    },
  ];
  // eslint-disable-next-line
  const [width, _] = useSize(translationsEl);
  const [language, setLanguage] = useState('Англійська');
  const [videoUrl, setVideoUrl] = useState(videoUrls[0]);

  const toggleLanguage = (item, i) => {
    setLanguage(language => (language = item));
    setVideoUrl(videoUrl => (videoUrl = videoUrls[i]));
  };

  return (
    <TranslationsBackground ref={translationsEl}>
      <TranslationsSection id="translations">
        <Box>
          <TranslationsWrapper>
            <TranslationTextWrapper>
              <TranslationsTitle>
                БЮРО <TranslationsSubTitle>ПЕРЕКЛАДІВ</TranslationsSubTitle>
              </TranslationsTitle>
              <TranslationsNavigation>
                {listItems.map((item, i) => (
                  <NavigationItem key={i}>
                    <TranslationsToggler
                      className={language === item ? 'selected' : ''}
                      onClick={() => toggleLanguage(item, i)}
                    >
                      {item}
                      <TranslationsArrow />
                    </TranslationsToggler>
                  </NavigationItem>
                ))}
              </TranslationsNavigation>
            </TranslationTextWrapper>
            <VideoLimiter>
              <VideoBox>
                <ReactPlayer
                  loop={true}
                  controls={true}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                  width="100%"
                  height="100%"
                  url={
                    width >= 768 ? videoUrl.notMobileUrl : videoUrl.mobileUrl
                  }
                />
              </VideoBox>
            </VideoLimiter>
          </TranslationsWrapper>
        </Box>
      </TranslationsSection>
    </TranslationsBackground>
  );
};
