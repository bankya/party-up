import React from "react";
import "./song-card.css";
import { PlusIcon } from "../plus-icon/plus-icon.component";
import { MinusIcon } from "../minus-icon/minus-icon.component";
import { Song } from "../../lib/constants";

type SongCardProps = {
  song: Song;
  actionIcon: "plus" | "minus";
  onClick?: VoidFunction;
};

export const SongCard = ({ song, actionIcon, onClick }: SongCardProps) => {
  const { name, artist, imgUrl } = song;

  return (
    <div className="song-card-wrapper" onClick={onClick}>
      <img
        className="song-card-image"
        src={imgUrl}
        alt={`${name} album art`}
      ></img>
      <div className="song-name">
        <span className="song-card-text">{name}</span>
      </div>
      <div className="song-artist">
        <span className="song-card-text">{artist}</span>
      </div>
      {actionIcon === "plus" ? <PlusIcon /> : <MinusIcon />}
    </div>
  );
};
