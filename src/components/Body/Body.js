import React from "react";
import "./Body.css";

import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { useDataLayerValue } from "../../DataLayer";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);

  const playPlaylist = (id) => {
    spotify
      .play({ uri: `spotify:playlist:7yCHqwZ4ZhfYhexRJjwId9` })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify.play({ uris: [`spotify:track:${id}`] }).then((res) => {
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLISTS</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>
            {`${discover_weekly?.owner.display_name} - `}
            {`${discover_weekly?.tracks.total} songs, `}
            {discover_weekly?.followers.total} followers
          </p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow playSong={playSong} track={item.track} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Body;
