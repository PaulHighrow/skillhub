import { Box } from 'components/Box/Box.styled';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Description,
  DescriptionMoreText,
  DescriptionTrigger,
  DescriptionUnderlineShort,
  DescriptionUnderlineLong,
  HeroSection,
  SubTitle,
  Title,
  TitleSketch,
  HeroVector,
} from './Hero.styled';
import { HeroMarquee } from './HeroMarquee/HeroMarquee';

export const Hero = ({ closeModal, toggleModal }) => {
  const [isMore, setIsMore] = useState(false);
  const [isSketchHidden, setIsSketchHidden] = useState(true);
  const [isSubtitleHidden, setIsSubtitleHidden] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const showMore = () => {
    setIsMore(isMore => !isMore);
  };

  useEffect(() => {
    const showSubtitle = setTimeout(() => {
      setIsSubtitleHidden(isHidden => (isHidden = false));
    }, 1500);

    const showSketch = setTimeout(() => {
      setIsSketchHidden(isHidden => (isHidden = false));
    }, 3000);

    return () => {
      clearTimeout(showSubtitle);
      clearTimeout(showSketch);
    };
  }, []);

  return (
    <HeroSection id="hero">
      <Box>
        <Title>
          ONE STEP FROM ZERO TO{' '}
          <SubTitle ref={ref}>
            HERO{inView && !isSketchHidden && <TitleSketch />}
            {!isSubtitleHidden && <HeroVector />}
          </SubTitle>
        </Title>
        <Description>
          <span>
            «AP Education Center» є провідним центром навчання іноземних мов та
            підготовки до міжнародних іспитів{isMore ? '' : '...'}
          </span>
          <DescriptionMoreText
            className={isMore ? 'more-shown' : 'more-hidden'}
          >
            {' '}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem veritatis temporibus magni? A amet eius atque
            provident quod explicabo asperiores pariatur modi corporis quibusdam
            accusamus magni exercitationem vero, similique commodi nulla beatae
            deleniti, esse, maxime ea eum natus temporibus? Exercitationem unde
            laborum reiciendis explicabo molestias dignissimos temporibus quod
            perferendis voluptate vitae debitis suscipit odio ipsam eligendi
            iusto dicta autem quos excepturi, aspernatur voluptatibus eveniet ab
            a. Odit provident nisi nesciunt culpa. Tempora esse voluptatem
            dolore, porro aspernatur nostrum non fuga laudantium praesentium
            consectetur quisquam maiores ducimus officia at eum ratione
            necessitatibus dicta distinctio harum corrupti repudiandae id est
            temporibus laboriosam? Sint architecto obcaecati nam quae
            voluptatibus aut totam dolore at, deserunt dolor perspiciatis optio
            quia, similique sapiente ab ducimus? Sint non, totam reiciendis
            consequuntur nostrum voluptatibus cumque unde soluta. Quasi ad a
            mollitia sequi. Voluptates porro voluptatibus itaque cumque quaerat
            laudantium tempore, qui voluptatum alias ipsum quisquam sed
            quibusdam officiis.
          </DescriptionMoreText>
        </Description>
        <DescriptionTrigger onClick={showMore}>
          {isMore ? 'Згорнути' : 'Дізнатись більше'}
          {isMore ? (
            <DescriptionUnderlineShort />
          ) : (
            <DescriptionUnderlineLong />
          )}
        </DescriptionTrigger>
      </Box>
      <HeroMarquee toggleModal={toggleModal} />
    </HeroSection>
  );
};
