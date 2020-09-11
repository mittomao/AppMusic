import React from 'react';

import Img2 from './List_Icons/2.jpg';
const BoxMusic = (props) => {
    // console.log(props)
    const hanlPlay = (data) => {
       props.hanldGetLink(data);
    }
    return (
        <div className="lists-music__item"> 
            <div className="box-music">
                <a href="#" onClick={()=>hanlPlay(props)}>
                    <img src={Img2} alt="" className="avatar-img" />
                </a>
                <span className="stt1">{props.stt}</span>
                <a href="#" className="content">
                    <span className="name-song">{props.name}</span>
                    <span className="singer-song text_new">{props.singer}</span>
                </a>
                <div className="action">
                    <a href="#">
                        <i className="fa fa-cloud-download-alt" aria-hidden="true" />
                    </a>
                    <a href="#">
                        <i className="fa fa-heart" aria-hidden="true" />
                    </a>
                    <a href="#">
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BoxMusic;