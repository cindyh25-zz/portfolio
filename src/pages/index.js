import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import PlusButton from '../images/plusbutton.svg';
import CollapseButton from '../images/leftbutton.svg';

import Head from '../components/Head';
import { PageContainer, pageStyles } from '../constants/styles';
import Footer from '../components/Footer';
import { useState } from 'react';
import SummaryTable from '../components/SummaryTable';

// styles

const headingStyles = {
  fontFamily: 'Spectral, serif',
  fontStyle: 'italic',
  fontSize: '3rem',
  marginTop: '10vh',
  maxWidth: 1000,
};

const IntroHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 2em;
  margin-top: 1em;
`;

const MoreButton = styled.img`
  display: ${(props) => props.visibility};
  opacity: ${(props) => (props.visibility === 'none' ? 0 : 1)};
  width: 30px;
  margin-left: 4px;
  transition-delay: 0.5s;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-4px) scale(102%);
  }
`;

const Extras = styled.span`
  visibility: ${(props) => props.visibility};
  opacity: ${(props) => (props.visibility === 'hidden' ? 0 : 1)};
  transition: all 0.5s ease;
`;
const ExtrasSpan = styled.span`
  font-size: ${(props) => props.fontSize}px;
`;

const IndexPage = () => {
  const [isShowingExtras, showExtras] = useState(false);

  return (
    <main style={pageStyles}>
      <PageContainer>
        <Head page="home" />
        <h1 style={headingStyles}>Cindy Huang</h1>
        <IntroHeading>
          engineer and designer and{' '}
          <span>
            <MoreButton
              src={PlusButton}
              visibility={isShowingExtras ? 'none' : 'inline-block'}
              onClick={() => {
                showExtras(!isShowingExtras);
              }}
            />
          </span>
          <Extras visibility={isShowingExtras ? 'inherit' : 'hidden'}>
            <ExtrasSpan fontSize={36}>
              friend and fiber artist and{' '}
            </ExtrasSpan>
            <ExtrasSpan fontSize={28}>
              student and educator and product lover and plant parent
              and{' '}
            </ExtrasSpan>
            <ExtrasSpan fontSize={20}>
              kombucha brewer and Boston-raised Canadian-born and{' '}
            </ExtrasSpan>
            <ExtrasSpan fontSize={14}>
              tofu enthusiast and amateur seamstress and local coffee
              shop regular
              <MoreButton
                src={CollapseButton}
                visibility={isShowingExtras ? 'inline-block' : 'none'}
                onClick={() => {
                  showExtras(!isShowingExtras);
                }}
              />
            </ExtrasSpan>
          </Extras>
        </IntroHeading>

        <SummaryTable />
      </PageContainer>
      <Footer />
    </main>
  );
};

export default IndexPage;
