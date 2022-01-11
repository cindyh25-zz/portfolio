import styled from 'styled-components';
import {
  darkGreen,
  lightGreen,
  mediumGray,
  backgroundGreen,
} from './colors';
import { Container } from 'react-bootstrap';

export const pageStyles = {
  backgroundColor: backgroundGreen,
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
  box-sizing: border-box;
  margin: 0 0.5em;
  font-size: 12px;

  & .active-link {
    color: ${darkGreen};
    padding: 4px 8px;
    border: 1px solid ${darkGreen};
    border-radius: 50%;
    text-decoration: none;
    margin: 0;
  }
  & .inactive-link {
    color: initial;
    padding: 4px 8px;
    text-decoration: none;
    margin: 0;

    &:hover {
      color: ${darkGreen};
    }
  }
`;

export const PageContainer = styled(Container)`
  width: 80%;
  max-width: 1100px !important;
  min-height: 75vh;
`;

export const SectionHeader = styled.h3`
  font-family: 'Spectral, serif';
  font-style: italic;
  font-size: 3rem;
  font-weight: normal;
  margin-bottom: 2rem;
`;

export const MyLink = styled.a`
  text-decoration-style: dotted;
  text-decoration-color: ${(props) => props.color || darkGreen};
  color: inherit;
  text-underline-offset: 2px;
  font-weight: ${(props) => (props.bolded ? 'bold' : 'normal')};
  &:hover {
    color: ${(props) => props.color || darkGreen};
  }
`;

export const Caption = styled.p`
  margin-top: 1rem;
  color: ${mediumGray};
`;
