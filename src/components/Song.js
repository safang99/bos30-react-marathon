import React from 'react'

const Song = (props) => {
  let classes = ""
  if (props.selectedStatus) {
    classes = "selected"
  }

  return <div className={classes} onClick={props.handleClick}>{props.artist} - {props.name}</div>
}


export default Song