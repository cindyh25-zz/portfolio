import styled from 'styled-components';
import {
  darkGreen,
  lightGreen,
  lightGreenRGBA,
  mediumGray,
} from './colors';
import { Container } from 'react-bootstrap';

export const pageStyles = {
  backgroundColor: '#FAFAFA',
  fontFamily: 'Libre Franklin, sans-serif',
  minHeight: '100vh',
};

export const ButtonWrapper = styled.div`
  & .btn-primary {
    background-color: ${lightGreen};
    color: ${darkGreen};
    border: 1px solid ${darkGreen};
    letter-spacing: 0.025rem;
    &:hover {
      background-color: ${darkGreen};
      color: ${lightGreen};
      font-weight: bold;
    }
  }
`;

export const NavLinkWrapper = styled.span`
  & .active-link {
    color: ${darkGreen};
    font-weight: bold;
    background: linear-gradient(
      175deg,
      ${lightGreenRGBA} 20%,
      ${lightGreen} 20.01%,
      ${lightGreen} 76%,
      ${lightGreenRGBA} 76.01%
    );
    padding: 0 4px;
    text-decoration: none;
    margin: 0 0.5rem;
  }
  & .inactive-link {
    display: inline-block;
    color: initial;
    padding: 0 4px;
    text-decoration: none;
    margin: 0 0.5rem;

    &:hover {
      color: ${darkGreen};
    }
  }
`;

export const PageContainer = styled(Container)`
  width: 80%;
  max-width: 1300px;
  min-height: 75vh;
`;

export const SectionHeader = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const MyLink = styled.a`
  text-decoration-style: dotted;
  text-decoration-color: ${(props) => props.color || darkGreen};
  color: inherit;
  text-underline-offset: 2px;

  &:hover {
    color: ${(props) => props.color || darkGreen};
  }
`;

export const Caption = styled.p`
  margin-top: 1rem;
  color: ${mediumGray};
`;
