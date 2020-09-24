
import songs from "./List_Songs";
import React, { useState, useRef } from 'react';

// import Img2 from './List_Icons/2.jpg';
const BoxMusic = (props) => {
    // console.log(songs);
    const [isActive, setState] = useState(false);
    const hanlPlay = (data) => {
       props.hanldGetLink(data);
    }
  
    
    const clickHeart = (e)=>{
        e.preventDefault();
        setState(!isActive)
    }
    // console.log(isActive);
    return (
        <div className="lists-music__item"> 
            <div className="box-music">
                <a href="#" onClick={() => hanlPlay(props.id)} className ="box-music__img">
                    <img src={songs[props.id].image} alt="" className="avatar-img" />
                    <div className="overplay-play">
                        <i className="fa fa-play" aria-hidden="true"></i>
                    </div>
                </a>
                <span className="stt1">{props.stt}</span>
                <a href="#" className="content">
                    <span className="name-song">{props.name}</span>
                    <span className="singer-song text_new">{props.singer}</span>
                </a>
                <div className="action">
                    <a href="#">
                        <i className="fa fa-cloud-download-alt bg--aqua" aria-hidden="true" />
                    </a>
                    <a href="#" onClick={(e) => clickHeart(e)} className = {isActive ? "active" : null}>
                        <i className="fa fa-heart bg--white" aria-hidden="true"></i>
                        <span>1</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-ellipsis-v bg--blue" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BoxMusic;