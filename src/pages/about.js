import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from '../components/Head';
import Headshot from '../images/me.png';
import PlantHat from '../images/hat 2.png';
import PeaceHat from '../images/hat.png';
import Shirt from '../images/shirt.png';
import Jeans from '../images/jeans.png';
// import Resume from '../images/Huang_Cindy.pdf';
import {
  PageContainer,
  pageStyles,
  SectionHeader,
  Caption,
  MyLink,
} from '../constants/styles';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import { appdevLink, dpdLink, wiccLink } from '../constants/links';
import Footer from '../components/Footer';

const AboutContent = styled.div`
  margin-top: 2rem;
  padding-right: 8rem;
`;
const images = [PlantHat, Jeans, PeaceHat, Shirt];
const AboutRow = styled(Row)`
  margin-bottom: 4rem;
`;

const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <PageContainer>
        <Head page="about" />
        <section style={{ marginTop: '4rem' }}>
          <SectionHeader>About me</SectionHeader>
          <AboutRow>
            <Col md={8}>
              <AboutContent>
                <p>
                  Hi there! I'm Cindy. I'm studying Computer Science
                  at Cornell and graduating in 2022.
                </p>
                <p>
                  I've been finding my way in tech through the amazing
                  community of creative people at Cornell (shoutout to{' '}
                  <MyLink href={dpdLink}>
                    Intro to Digital Product Design
                  </MyLink>
                  ,{' '}
                  <MyLink href={wiccLink}>
                    Women in Computing at Cornell
                  </MyLink>
                  , and{' '}
                  <MyLink href={appdevLink}>Cornell AppDev</MyLink>),
                  and I'm grateful always to be a part of it.
                </p>
                <p>
                  But I also like to do a lot more than code and
                  design! You can find me trying different fiber arts,
                  looking at cool plants, or doing the daily
                  crossword.
                </p>

                <p>
                  If anything on this page piqued your interest, or
                  you make your own kombucha, or know how to fix a
                  sewing machine, I'd love to chat!
                </p>
                <p>
                  <MyLink href="../../Huang_Cindy.pdf">
                    My resume
                  </MyLink>
                </p>
              </AboutContent>
            </Col>
            <Col>
              <Image fluid src={Headshot} />
            </Col>
          </AboutRow>
          <SectionHeader>A peek into my life!</SectionHeader>
          <Row>
            {images.map((image) => (
              <Col>
                <Image fluid src={image} />
              </Col>
            ))}
          </Row>
          <Caption>
            Fiber arts are my outlet for physical designs and
            sustainable fashion 🙂 Some of my embroidery is over at{' '}
            <MyLink href="https://www.instagram.com/softstitchdesign/">
              @softstitchdesign
            </MyLink>
            .
          </Caption>
        </section>
        <Footer />
      </PageContainer>
    </main>
  );
};

export default AboutPage;
