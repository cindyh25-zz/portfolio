import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { NavLinkWrapper } from '../constants/styles';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { leafGreen } from '../constants/colors';
import { keyframes } from 'styled-components';

const logoAnimation = keyframes`
 0% {
  stroke-dashoffset: -93;
 }
 45% {
  stroke-dashoffset: -32;
 }
 55% {
  stroke-dashoffset: -32;
 }
 100% {
  stroke-dashoffset: -93;
 }

`;

const Logo = styled.circle`
  stroke-dasharray: ${Math.PI * 20 * 2};
  stroke-dashoffset: -93;
  stroke-width: 10;
  stroke-linecap: round;
  animation: ${logoAnimation} 3s cubic-bezier(0.72, 0.01, 0.23, 1.01)
    infinite;
`;

const MyNav = ({ activePage }) => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link to="/">
          <svg width={50} height={50}>
            <Logo
              id="bar"
              r="15"
              cx="25"
              cy="25"
              fill="transparent"
              stroke-dasharray={Math.PI * 15 * 2}
              stroke={leafGreen}
              transform={`rotate(-90 25 25)`}
            ></Logo>
          </svg>
        </Link>
        {/* <Name to="/">Cindy Huang</Name> */}
      </Navbar.Brand>
      <Nav
        style={{ flexDirection: 'row', width: '100%' }}
        className="justify-content-end"
      >
        <NavLinkWrapper>
          <AnchorLink
            to="/"
            className={
              activePage === 'home' ? 'active-link' : 'inactive-link'
            }
          >
            home
          </AnchorLink>
        </NavLinkWrapper>
        <NavLinkWrapper>
          <AnchorLink
            to="/projects"
            className={
              activePage === 'projects'
                ? 'active-link'
                : 'inactive-link'
            }
          >
            projects
          </AnchorLink>
        </NavLinkWrapper>
        <NavLinkWrapper>
          <AnchorLink
            to="/shelf"
            className={
              activePage === 'shelf' ? 'active-link' : 'inactive-link'
            }
          >
            shelf
          </AnchorLink>
        </NavLinkWrapper>
        <NavLinkWrapper>
          <Link
            to="/about"
            className={
              activePage === 'about' ? 'active-link' : 'inactive-link'
            }
          >
            about
          </Link>
        </NavLinkWrapper>
      </Nav>
    </Navbar>
  );
};

export default MyNav;
