import React from 'react';
import styled from 'styled-components';
import { mediumGray } from '../constants/colors';
import { MyLink } from '../constants/styles';
import { Col, Container, Row } from 'react-bootstrap';

const FooterContainer = styled.div`
  margin-top: 8rem;
  display: block;
  width: 100%;
  font-size: 12px;
  background-color: #eef4e8;
  position: static;
  bottom: 0;
`;

const FooterContent = styled(Container)`
  width: 80%;
  max-width: 1100px !important;
  padding: 0.5rem 1rem;
  color: ${mediumGray};
`;

const FooterLink = styled(MyLink)`
  color: ${mediumGray};
  margin-right: 2rem;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Row>
          <Col md={1}>
            <span>say hello:</span>
          </Col>

          <Col md={1}>
            <FooterLink
              href="mailto:ch832@cornell.edu"
              target="_blank"
            >
              email
            </FooterLink>
          </Col>
          <Col md={1}>
            <FooterLink
              href={'../../Cindy_Huang.pdf'}
              target="_blank"
            >
              resume
            </FooterLink>
          </Col>
          <Col md={1}>
            <FooterLink
              href="https://www.linkedin.com/in/cindyhuang-/"
              target="_blank"
            >
              linkedin
            </FooterLink>
          </Col>
          <Col md={1}>
            <FooterLink
              href="https://github.com/cindyh25"
              target="_blank"
            >
              github
            </FooterLink>
          </Col>
          <Col md={1}>
            <FooterLink
              href="https://twitter.com/cndyhuang"
              target="_blank"
            >
              twitter
            </FooterLink>
          </Col>
        </Row>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
