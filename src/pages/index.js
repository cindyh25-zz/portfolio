import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {
  appdevRed,
  hubspotOrange,
  lyftPink,
  teliePurple,
} from '../constants/colors';
import {
  appdevAppLink,
  dpdLink,
  hubspotLink,
  lyftLink,
  telieLink,
} from '../constants/links';
import Head from '../components/Head';
import {
  PageContainer,
  pageStyles,
  MyLink,
} from '../constants/styles';
import WorkPage from '../components/WorkPage';
import Footer from '../components/Footer';

// styles

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 1000,
  width: '60%',
};

const IntroHeading = styled.h1`
  font-size: 24px;
  margin: 1.5rem 0;
`;

const PopoverContent = styled.h5`
  margin: 0;
  font-family: 'Libre Franklin';
  font-weight: bold;
  padding: 0.75rem;
`;

const lyftPopover = (
  <Popover>
    <PopoverContent>Lyft</PopoverContent>
  </Popover>
);
const hubspotPopover = (
  <Popover>
    <PopoverContent>HubSpot</PopoverContent>
  </Popover>
);
const teliePopover = (
  <Popover>
    <PopoverContent>Telie</PopoverContent>
  </Popover>
);
const appdevPopover = (
  <Popover>
    <PopoverContent>Pear by AppDev</PopoverContent>
  </Popover>
);
const dpdPopover = (
  <Popover>
    <PopoverContent>Intro to Digital Product Design</PopoverContent>
  </Popover>
);

const IntroWrapper = styled.div`
  margin: 8rem 0;
`;

const WaveWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 48px 0;
`;

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <PageContainer>
        <Head page="home" />
        <IntroWrapper>
          <h1 style={headingStyles}>Hi, I'm Cindy!</h1>
          <IntroHeading>
            I'm currently trying to figure things out at Cornell.
          </IntroHeading>
          <IntroHeading>
            <span>
              I’ve <b>engineered</b>{' '}
            </span>
            <OverlayTrigger trigger="hover" overlay={lyftPopover}>
              <span>
                <MyLink color={lyftPink} href={lyftLink}>
                  here
                </MyLink>
              </span>
            </OverlayTrigger>
            <span> and </span>
            <OverlayTrigger trigger="hover" overlay={hubspotPopover}>
              <span>
                <MyLink color={hubspotOrange} href={hubspotLink}>
                  here
                </MyLink>
              </span>
            </OverlayTrigger>
            <span>
              , <b>designed</b>{' '}
            </span>
            <OverlayTrigger trigger="hover" overlay={teliePopover}>
              <span>
                <MyLink color={teliePurple} href={telieLink}>
                  this
                </MyLink>
              </span>
            </OverlayTrigger>
            <span> and </span>
            <OverlayTrigger trigger="hover" overlay={appdevPopover}>
              <span>
                <MyLink color={appdevRed} href={appdevAppLink}>
                  this
                </MyLink>
              </span>
            </OverlayTrigger>
            <span>
              , and <b>taught</b>{' '}
            </span>
            <OverlayTrigger overlay={dpdPopover}>
              <span>
                <MyLink color={appdevRed} href={dpdLink}>
                  this
                </MyLink>
              </span>
            </OverlayTrigger>
            <span>.</span>
          </IntroHeading>

          <IntroHeading>
            More importantly, I want to create things that help people
            explore and do what they love.
          </IntroHeading>
        </IntroWrapper>
        <WaveWrapper>
          <svg
            width="100%"
            viewBox="0 0 1440 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M576 59.7L576.055 60.6985L576.059 60.6982L576 59.7ZM864 11.7L864.003 10.7L863.997 10.7L864 11.7ZM1152 59.7L1151.94 60.6982L1151.94 60.6985L1152 59.7ZM0 2H48V0H0V2ZM48 2C96.0016 2 191.926 2.00152 287.836 17.9864L288.164 16.0136C192.074 -0.00151706 95.9984 0 48 0V2ZM287.836 17.9864C335.837 25.9867 383.72 37.9643 431.809 47.3191C479.837 56.662 527.932 63.3553 576.055 60.6985L575.945 58.7015C528.068 61.3447 480.163 54.688 432.191 45.3559C384.28 36.0357 336.163 24.0133 288.164 16.0136L287.836 17.9864ZM576.059 60.6982C624.164 57.842 672.258 45.8917 720.228 34.6486C768.236 23.3967 816.132 12.8496 864.003 12.7L863.997 10.7C815.868 10.8504 767.764 21.4533 719.772 32.7014C671.742 43.9583 623.836 55.858 575.941 58.7018L576.059 60.6982ZM863.997 12.7C911.868 12.8496 959.764 23.3967 1007.77 34.6486C1055.74 45.8917 1103.84 57.842 1151.94 60.6982L1152.06 58.7018C1104.16 55.858 1056.26 43.9583 1008.23 32.7014C960.236 21.4533 912.132 10.8504 864.003 10.7L863.997 12.7ZM1151.94 60.6985C1248.16 66.0104 1344.33 33.9437 1392.32 17.9487L1391.68 16.0513C1343.67 32.0563 1247.84 63.9896 1152.06 58.7015L1151.94 60.6985ZM1392.32 17.9487L1440.32 1.94868L1439.68 0.0513167L1391.68 16.0513L1392.32 17.9487Z"
              fill="#DDF1E3"
            />
          </svg>
        </WaveWrapper>
        <WorkPage />
        <Footer />
      </PageContainer>
    </main>
  );
};

export default IndexPage;
