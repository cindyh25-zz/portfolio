import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { NavLinkWrapper } from '../constants/styles';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Name = styled(Link)`
  font-weight: bold;
  color: initial;
  text-decoration: none;
  margin-right: 1rem;
  & :hover {
    color: initial;
  }
`;

const MyNav = ({ activePage }) => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <Name to="/">Cindy Huang</Name>
      </Navbar.Brand>
      <Nav style={{ flexDirection: 'row' }}>
        <NavLinkWrapper>
          <AnchorLink
            to="/#work"
            className={
              activePage === 'work' ? 'active-link' : 'inactive-link'
            }
          >
            work
          </AnchorLink>
        </NavLinkWrapper>
        <span> / </span>
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
