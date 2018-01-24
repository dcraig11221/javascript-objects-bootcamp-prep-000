var playlist = {beatles: "Hey Jude"}

function updatePlaylist(playlist, artist, title) {
  let o = {}
  o[artist] = title
  playlist.push(o)
  return playlist
}
