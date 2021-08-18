import React from 'react';
import styled from 'styled-components';
import { mediumGray } from '../constants/colors';
import { MyLink } from '../constants/styles';

const FooterContainer = styled.div`
  margin-top: 8rem;
  display: block;
  width: 100%;
  font-size: 0.8rem;
`;

const FooterContent = styled.div`
  padding: 4rem 0;
  color: ${mediumGray};
`;

const FooterLink = styled(MyLink)`
  color: ${mediumGray};
  // text-decoration: none;
  margin-right: 2rem;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <svg
        width="100%"
        viewBox="0 0 1441 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L81 22.3C161 44 321 86 481 86.3C641 86 801 44 961 22.3C1121 1 1281 1 1361 1H1441"
          stroke="#DDF1E3"
          stroke-width="2"
        />
      </svg>
      <FooterContent>
        <p>
          This corner of the Internet is the latest digital version of
          myself, but always a work in progress. Thanks for visiting,
          and I'd love to get to know you too!
        </p>
        <FooterLink href="mailto:ch832@cornell.edu">Email</FooterLink>
        <FooterLink href={'../../Huang_Cindy.pdf'}>Resume</FooterLink>
        <FooterLink href="https://www.linkedin.com/in/cindyhuang-/">
          LinkedIn
        </FooterLink>
        <FooterLink href="https://github.com/cindyh25">
          GitHub
        </FooterLink>
        <FooterLink href="https://twitter.com/cndyhuang">
          Twitter
        </FooterLink>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
