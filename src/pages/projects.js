import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Head from '../components/Head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer';
import {
  PageContainer,
  pageStyles,
  MyLink,
} from '../constants/styles';
import { emailLink } from '../constants/links';
import { leafGreen } from '../constants/colors';

const WipText = styled.p`
  text-align: center;
  font-family: 'Spectral, serif';
  margin: 2rem 0;
`;
const EmptyProject = styled(Col)`
  border: 1px solid ${leafGreen};
  height: ${(props) => props.height}vh;
  margin: 0 1em;
`;

const ProjectsPage = () => {
  return (
    <main style={pageStyles}>
      <PageContainer>
        <Head page="projects" />
        <WipText>
          under construction <br />
          please{' '}
          <MyLink
            href={`${emailLink}?subject=update your website!!`}
            target="_blank"
          >
            bug me
          </MyLink>{' '}
          to update this if you’re curious about my work
        </WipText>

        <Row>
          <EmptyProject height={50} />
          <EmptyProject height={50} />
          <EmptyProject height={50} />
        </Row>
        <Row>
          <EmptyProject height={8} />
          <EmptyProject height={8} />
          <EmptyProject height={8} />
        </Row>
      </PageContainer>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
