
import './css/style.scss';
import './css/music.scss';

import React, { useState, useRef } from 'react';

import TimeSlider from "react-input-slider";
import songs from "./List_Songs";
import person from './List_Icons/moonwalk.gif';


// Import Icon

// import Avatar from './List_Icons/avatar.png';
// import NextIcon from './List_Icons/NextIcon';
// import PrevIcon from './List_Icons/PrevIcon';
// import PlayIcon from './List_Icons/PlayIcon';
// import PauseIcon from './List_Icons/PauseIcon';
import TopMusic from './topMusic';
import Span from './spanTrack';

const listTab = [
  { 'id': 1, 'name': 'Tab1', 'url': '/mike' },
  { 'id': 2, 'name': 'Tab2', 'url': '/donnie' },
  { 'id': 3, 'name': 'Tab3', 'url': '/raph' }
];

const App = () => {

  // Khai Bao
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [activeTab, setState] = useState({ "activeTab": listTab[0].name, "isShowList": true , isStyle2 : false });
  // const [isShowList] = useState(true);

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

  const getIdMusic = (id) => {
    setAudioIndex(id);
    setPlay({ isPlay: true });
  }


  // const isActive = (isPlay) ? "active" : "";

  let TimeDuration = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
  let Timecurrent = `${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)}`;


  const handleClick = (tab) => {

    setState({
      ...activeTab, activeTab: tab

    });
  }

  // Show Lít
  const showList = () => {
    // setState(!isShowList);
    setState({
      ...activeTab, isShowList: !activeTab.isShowList
    });
  }

  const showStyle2 = () => {
    if(!activeTab.isShowList){
      setState({
        ...activeTab, isStyle2: !activeTab.isStyle2
      });
    }
    
    //  (2>1&&1<0)?alert("aa"):alert("bb")
  }
  const hideStyle2 = () => {

      setState({
        ...activeTab, isStyle2: !activeTab.isStyle2
      });
  }


  // Style Css


  const styleThum = {
    width: '20px',
    height: '20px',
    borderRadius: '15px',
    marginLeft: '-15px',
    backgroundColor: '#EBECF0',
    position: 'absolute',
    top: "50% !important",
    transform: 'translateY(-50%)',
    zIndex: '1',
    cursor: 'pointer',
    boxShadow: '4px 4px 5px -2px rgba( 0, 0, 0 , .5), -4px -4px 5px 0px rgba(255,255,255, .4)'
  }
  const styleTrack = {

    height: '6px',
    width: '100%',
    borderRadius: '3px',
    border: 'none',
    position: 'absolute',
    bottom: '10px',
    cursor: 'pointer',
    boxShadow: 'inset 2px 2px 3px -2px rgba(0,0,0, .3), inset -2px -2px 3px 0px rgba(255,255,255, .5)'
  }

  // const createSpan = (n) => {
  //   for (let i = 1; i <= n; i++) {
  //       <Span duration={i + "s"}></Span>
  //   }
  // }



  const randomDuration = (n) => {
    return Math.floor(Math.random() * n);
  }
  console.log(activeTab)
  //console.log(randomDuration(7));
  // Main
  return (
    <div className="main">
      <div className="container">
        <div className={"row" + (activeTab.isShowList ? "" : " d_none")}>
          <div className="col--8">
            <div className= {"edm " + ((activeTab.isStyle2) ? " show" : "")}>
              <button className="back" onClick={() => hideStyle2()}>
                <i className="fa fa-angle-up" aria-hidden="true"></i>
              </button>
              <div className="road">
              </div>
              <div className="catwalk">
                <img src={person} alt="" />
              </div>
            </div>
            <section className="lists-music">

              {
                <div className={"track-loading" + (activeTab.isShowList ? "" : " active")}>
                  <Span duration={"1s"}></Span>
                  <Span duration={"2s"}></Span>
                  <Span duration={"3s"}></Span>
                  <Span duration={"4s"}></Span>
                  <Span duration={"5s"}></Span>
                  <Span duration={"6s"}></Span>
                  <Span duration={"7s"}></Span>
                </div>
              }

              <div className= {"card-music " + ((activeTab.isStyle2) ? "hide" : "")}>
                <div className="d-flex">
                  <button type="button" className="btn1 music-btn music-btn_fab" onClick={() => showStyle2()}><i className="fa fa-angle-down"></i></button>
                  <div className="music-text flex-grow-1 my-auto text-center">
                    <h2><span>APP MUSIC</span></h2>
                  </div>
                  <button type="button" className="btn1 music-btn music-btn_fab" onClick={() => showList()}><i className="fa fa-bars"></i></button>
                </div>
                <div className="card-music__body">
                  <div className={"card-music__img " + (isPlay ? 'active' : '')}>
                    <img
                      src={songs[audioIndex].image}
                    />
                  </div>
                  <div className="abc my-4">
                    <div className={"card__title text-center " + (isPlay ? " active" : null)}>{songs[audioIndex].title}</div>
                    <div className="card__text text-center">{songs[audioIndex].artist}</div>
                  </div>
                  <div className="music-slider mx-auto">
                    <div className="music-slider__text music-slider__text_left">{Timecurrent}</div>
                    {/* <div className="music-slider__back"></div>
    <div className="music-slider__line"></div>
    <div className="music-slider__thumb"></div> */}
                    <TimeSlider
                      axis="x"
                      xmax={duration}
                      x={currentTime}
                      onChange={hanldTime}
                      styles={{
                        track: styleTrack,
                        active: {
                          background: 'linear-gradient(90deg, #779DFF, #9EB8FF)',
                        },
                        thumb: styleThum,
                      }}
                    />
                    <audio
                      ref={audioRef}
                      src={songs[audioIndex].src}
                      onLoadedData={hanldLoadMusic}
                      onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                      onEnded={() => setPlay(false)}
                    />
                    <div className="music-slider__text music-slider__text_right">{TimeDuration}</div>
                  </div>
                  <div className="mt-5 mb-3 d-flex w-100 player-controls">
                    <button type="button" className="btn1 music-btn music-btn_fab mx-auto"
                      onClick={() => setAudioIndex((audioIndex - 1) % songs.length)}
                    >
                      <i
                        className="fa fa-backward"></i>
                    </button>
                    <button type="button" className="btn1 music-btn music-btn_fab music-btn_primary mx-auto"
                      onClick={hanldToggle}
                    >
                      <i className={isPlay ? 'fa fa-pause' : 'fa fa-play'}></i>
                    </button>
                    <button type="button" className="btn1 music-btn music-btn_fab mx-auto"
                      onClick={() => setAudioIndex((audioIndex + 1) % songs.length)}
                    ><i
                      className="fa fa-forward"></i></button>
                  </div>
                </div>
              </div>
              
              {/* Avavtar IMG */}
             
              <div  className= {"card-music__img box-avatar-music " + ((activeTab.isStyle2) ? " show" : "")}>
                <img src={songs[audioIndex].image} />
              </div>
              {
                <div className={"track-loading" + (activeTab.isShowList ? "" : " active")}>
                  <Span duration={"7s"}></Span>
                  <Span duration={"6s"}></Span>
                  <Span duration={"5s"}></Span>
                  <Span duration={"4s"}></Span>
                  <Span duration={"3s"}></Span>
                  <Span duration={"2s"}></Span>
                  <Span duration={"1s"}></Span>
                </div>
              }

            </section>
          </div>
          <div className="col--4">
            <TopMusic
              song={songs}
              getId={getIdMusic}
              dataTab={listTab}
              activeTab={activeTab.activeTab}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
