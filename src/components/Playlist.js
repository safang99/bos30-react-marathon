import React from "react";

const Playlist = (props) => {
  let className = ""

  if (props.selectedStatus) {
    className = "selected"
  }

  return(
    <div className={className} onClick={props.onClickWrapper}>{props.playlist.name}</div>
  )
};

export default Playlist;
