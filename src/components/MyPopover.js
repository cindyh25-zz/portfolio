import React from 'react'
import Popover from 'react-bootstrap/Popover'

const MyPopover = ({ content }) => {
  return (<Popover>
    <Popover.Body>
      {content}
    </Popover.Body>
  </Popover>)

}

export default MyPopover