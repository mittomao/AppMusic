
import './style.scss';

import React, { useState, useRef } from 'react';

import TimeSlider from "react-input-slider";
import songs from "./List_Songs";



// Import Icon

// import Avatar from './List_Icons/avatar.png';
import NextIcon from './List_Icons/NextIcon';
import PrevIcon from './List_Icons/PrevIcon';
import PlayIcon from './List_Icons/PlayIcon';
import PauseIcon from './List_Icons/PauseIcon';
import TopMusic from './topMusic';


const App = () => {

  // Khai Bao
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [index,setState] = useState();

  // Viet Ham Xu Ly



  const hanldLoadMusic = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) {
      audioRef.current.play();
    }
  }

  const hanldToggle = () => {
    (isPlay) ? audioRef.current.pause() : audioRef.current.play();
    // Chuyeen Trang Thai
    setPlay(!isPlay);
  }

  const hanldTime = ({ x }) => {
    audioRef.current.currentTime = x;

    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  }

  // Get Id Box Music

  const getIdMusic = (id)=>{
    // setAudioIndex(id.dataCurrentId);
    // setState({
    //   audioIndex : id.dataCurrentId
    // });
    console.log(id.dataCurrentId);
  }

  const isActive = (isPlay) ? "active" : "";

  let TimeDuration = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
  let Timecurrent = `${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)}`;


  // Main
  return (
    <div className="container">
      <div className="row-flex">
        <section className="lists-music">
          <h2><span>APP MUSIC</span></h2>
          <div id="app-cover">
            <div id="player">
              <div id="player-track" className={isActive}>
                <div id="album-name">{songs[audioIndex].title}</div>
                <div id="track-name">{songs[audioIndex].artist}</div>
                <div id="track-time" className="active">
                    <div id="current-time">{Timecurrent}</div>
                    <div id="track-length">{TimeDuration}</div>
                </div>
                <TimeSlider
                  axis="x"
                  xmax={duration}
                  x={currentTime}
                  onChange={hanldTime}
                  styles={{
                    track: {
                      background: '#ddd',
                      borderRadius: '10px',
                      height: '5px',
                      marginBottom: '5px'
                    },
                    active: {
                      backgroundColor: "purple",
                    },
                    thumb: {
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'purple',
                      display: 'block'
                    },
                  }}
                />
                <audio
                  ref={audioRef}
                  src={songs[audioIndex].src}
                  onLoadedData={hanldLoadMusic}
                  onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                  onEnded={() => setPlay(false)}
                />


              </div>
              <div id="player-content">
                <div id="album-art" className={isActive}>
                  <img src={songs[audioIndex].image} className="active" id="_1" />
                  <div id="buffer-box">Buffering ...</div>
                </div>
                <div id="player-controls">
                  <div className="control">
                    <div className="button1" onClick={() => setAudioIndex((audioIndex - 1) % songs.length)}>
                      <PrevIcon />
                    </div>
                  </div>
                  <div className="control">
                    <div className="button1" onClick={hanldToggle}>
                      {isPlay ? <PauseIcon /> : <PlayIcon />}
                    </div>
                  </div>
                  <div className="control">
                    <div className="button1" onClick={() => setAudioIndex((audioIndex + 1) % songs.length)}>
                      <NextIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TopMusic song = {songs} getId = {getIdMusic}/>
      </div>
    </div>
  );
}

export default App;
