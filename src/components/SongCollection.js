import React, { useState } from "react"
import Song from './Song'

const SongCollection = (props) => {
  const [songId, setSongId] = useState(null)

  const songs = props.songs.map((song) => {
    
    const handleClick = () => {
      setSongId(song.id)
    }

    let selectedStatus = false
    if (songId === song.id) {
      selectedStatus = true
    }

    return(
      <Song 
        key={song.id}
        name={song.name}
        artist={song.artist}
        handleClick={handleClick}
        selectedStatus={selectedStatus}
      />
    )
  })

 return (
  <div className="cell small-6">
    <h1>Songs</h1>
      {songs}
  </div>
 )
}

export default SongCollection