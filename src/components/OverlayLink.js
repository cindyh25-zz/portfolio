import React from 'react'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import styled from 'styled-components';
import Popover from "react-bootstrap/Popover";

const MyLink = styled.a`
  text-decoration-style: dotted;
  text-decoration-color: ${props => props.color};
  color: inherit;

  &:hover {
    color: ${props => props.color};
  }
`

const linkStyle = {
  textDecorationStyle: "dotted",
  textDecorationColor: "#FF00BF",
  color: 'inherit',
}

const lyftPopover = (
  <Popover>
    <Popover.Body>
      Lyft
    </Popover.Body>
  </Popover>
);

function OverlayLink({ popover, color, href, content }) {
  return (<OverlayTrigger trigger="focus" placement="right" overlay={lyftPopover}><span><MyLink color={color} href={href}>{content}</MyLink></span></OverlayTrigger>
  )

}

export default OverlayLink