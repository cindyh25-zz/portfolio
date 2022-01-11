import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from '../components/Head';
import Headshot from '../images/me.png';
import {
  PageContainer,
  pageStyles,
  SectionHeader,
  MyLink,
} from '../constants/styles';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import {
  appdevLink,
  dpdLink,
  elabLink,
  wiccLink,
} from '../constants/links';
import Footer from '../components/Footer';

const AboutContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 10vh;
`;
const AboutRow = styled(Row)`
  margin-bottom: 4rem;
`;

const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <PageContainer>
        <Head page="about" />
        <section style={{ marginTop: '4rem' }}>
          <SectionHeader>Hi! I'm Cindy.</SectionHeader>
          <AboutRow>
            <Col md={{ span: 5, order: 'last' }}>
              <Image fluid src={Headshot} />
            </Col>
            <Col md={{ span: 6, order: 'first' }}>
              <AboutContent>
                <p>
                  I’m happiest when creating new things from scratch,
                  whether they’re made of pixels, code, ink, or yarn.
                  I’m studying computer science at Cornell and
                  graduating in 2022.
                </p>
                <p>
                  Right now I’m focusing on becoming better at all
                  things frontend development and product. I love
                  working with a combination of interesting
                  engineering, design, and business challenges and
                  have been doing so with side projects and teams at
                  Lyft, HubSpot, and startups.
                </p>
                <p>
                  On campus I care about mentoring others in the CS +
                  design community and building products that make
                  people happy. I help teach{' '}
                  <MyLink href={dpdLink} target="_blank">
                    Intro to Digital Product Design
                  </MyLink>
                  , launch apps with{' '}
                  <MyLink href={appdevLink} target="_blank">
                    Cornell AppDev
                  </MyLink>
                  , and am working on something new with friends and
                  the help of{' '}
                  <MyLink href={elabLink} target="_blank">
                    eLab
                  </MyLink>
                  . I also won’t shut up about inclusion in tech and
                  advise{' '}
                  <MyLink href={wiccLink} target="_blank">
                    Women in Computing at Cornell
                  </MyLink>
                  .
                </p>

                <p>Let’s be friends!</p>
              </AboutContent>
            </Col>
          </AboutRow>
        </section>
      </PageContainer>
      <Footer />
    </main>
  );
};

export default AboutPage;
