var playlist = {artistName: "Khaleda Khan"};

var updatePlaylist = function (playlist, artistName, songTitle) {
  // it's important that we merge everything into
  // a new object
  return Object.assign({}, playlist, { [artistName]: songTitle })
};
//
var removeFromPlaylist = function(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
};
