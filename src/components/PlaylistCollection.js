import React, { useState } from "react";
import Playlist from "./Playlist"

const PlaylistCollection = (props) => {
  const [selectedId, setSelectedId] = useState(null)

  const playlists = props.playlists.map((playlist) => {
    let selectedStatus = false

    if(playlist.id === selectedId) {
      selectedStatus = true
    }

    const onClickWrapper =() => {
      setSelectedId(playlist.id)
    }

    return (
      <Playlist 
        key={playlist.id}
        playlist={playlist}
        selectedStatus={selectedStatus}
        onClickWrapper={onClickWrapper}
      />
    );
  });


  return (
      <div className="cell small-6">
          <h1>Playlist</h1>
          {playlists}
      </div>
  )
};

export default PlaylistCollection;
