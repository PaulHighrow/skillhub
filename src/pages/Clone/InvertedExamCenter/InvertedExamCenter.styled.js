import { InvertedBackgroundWrapper } from 'components/BackgroundWrapper/InvertedBackgroundWrappers';
import { PageNavigationText } from 'components/HowItWorks/HowItWorks.styled';
import styled from 'styled-components';
import { ReactComponent as UnderlineLong } from '../../../img/svg/exam-underline-long.svg';
import { ReactComponent as UnderlineMedium } from '../../../img/svg/exam-underline-medium.svg';
import { ReactComponent as UnderlineShort } from '../../../img/svg/exam-underline-short.svg';

export const ExamCenterBackground = styled(InvertedBackgroundWrapper)`
  background-position: left -70px bottom 0px;

  @media screen and (min-width: 768px) {
    background-position: right -140px top 70px;
  }

  @media screen and (min-width: 1280px) {
    background-position: right -215px top 70px;
  }
`;

export const ExamCenterSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px;
  }
`;

export const ExamCenterWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 6px;
  display: flex;
  gap: 33px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 684px;
    gap: 30px;

    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 1155px;

    gap: 40px;
  }

  @media screen and (min-width: 1390px) {
    width: 1280px;
  }
`;

export const ExamCenterTitle = styled.h2`
  color: var(--secondary-color);
  font-family: var(--title-font-family);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--secondary-color);
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 390px) {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    text-align: center;
    letter-spacing: 3.5px;
    margin: 0 auto;
    margin-bottom: 52px;
    font-size: 51px;
    -webkit-text-stroke: 2px var(--secondary-color);
  }

  @media screen and (min-width: 1280px) {
    max-width: 871px;
    font-size: 82px;
  }
`;

export const ExamCenterSubTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: 28px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;

  color: var(--accent-color);

  @media screen and (min-width: 390px) {
    font-size: 42px;
  }

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 100px;
  }
`;

export const ExamCenterList = styled.ul`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1.8px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;

  &:last-child {
    padding-bottom: 6px;
  }

  @media screen and (min-width: 768px) {
    text-align: end;
    font-size: 32px;
    gap: 41px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
    gap: 62px;
  }
`;

export const NavigationItem = styled.li`
  flex: 0 0 auto;
`;

export const ExamToggler = styled.a`
  user-select: none;
  color: var(--secondary-color);
  z-index: 1;
  position: relative;
  transition: color var(--animation-global);

  @media screen and (min-width: 1280px) {
    cursor: pointer;
  }

  &.selected,
  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &.selected svg {
    display: block;
  }
`;

const underlineStyles =
  'display: none; position: absolute; width: 100%; bottom: -6px; left: 0px; transform: rotate(-1.5deg);';

export const ExamTogglerUnderlineShort = styled(UnderlineShort)`
  ${underlineStyles}
`;

export const ExamTogglerUnderlineMedium = styled(UnderlineMedium)`
  ${underlineStyles}
`;

export const ExamTogglerUnderlineLong = styled(UnderlineLong)`
  ${underlineStyles}
`;

export const VideoLimiter = styled.div`
  margin: 0 auto;
  margin-bottom: 60px;
  max-width: 640px;

  @media screen and (min-width: 768px) {
    max-width: 960px;
    margin-bottom: 90px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin-bottom: 120px;
  }
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
`;

export const NavigationWrapper = styled.div`
  padding-left: 11px;

  @media screen and (min-width: 768px) {
    padding-left: 43px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 75px;
  }
`;

export const NavigationDesc = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--secondary-color);
  letter-spacing: 1.8px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 19px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
    margin-bottom: 22px;
  }
`;

export const BottomPageNavigationText = styled(PageNavigationText)`
  right: 0px;
  left: 325px;
  bottom: -2px;
`;
