import React, { useState, useRef } from 'react';

import Img from './List_Icons/1.jpg';
// import Img2 from './List_Icons/2.jpg';
import BoxMusic from './boxMusic';
import Tab from './Tab';



const Tabs = () => {
    const [isCurrent , setState] = useState(false);
    const changeActive = (active) => {
        // setState({
        //     isCurrent : !active
        // });
    }

    return (
        <div className="tops-music__header">
            <Tab  url = {"#"} title = {"Bảng Xếp Hạng"} isCurrent = {true} changeActive = {changeActive} />
            <Tab  url = {"#"} title = {"K-Pop"} isCurrent = {false} changeActive = {changeActive}/>
            <Tab  url = {"#"} title = {"V-Pop"} isCurrent = {false} changeActive = {changeActive}/>
        </div>
    );
}



const TopMusic = (props) => {
    const [dataCurrentId, setState] = useState(0);

    const [active] = useState(true);
    const audios = props.song;

    // Lay Data tu Box Music Sang Va Chuyen Vao STate
    const getMusic = (data) => {

        const dataId = data.id;
        setState({
            dataCurrentId: dataId
        });

        
    }

    // Ham Thay Doi active

    // const hanldActive = () => {
    //     let curentActive = active;
    //     setState({
    //         active: !curentActive
    //     });
    // }

    // Chuyen Du Lieu Len Appp
    
    props.getId(dataCurrentId);

    
    const showMusic = (data) => {
        
        return data.map((item, i) => {
            return (<BoxMusic
                key={i + 1}
                stt={i + 1}
                id={item.id}
                name={item.title}
                singer={item.artist}
                hanldGetLink={getMusic}
            />);
        });
    }


    return (
        <nav className="tops-music">
            <Tabs 
            />
            <div className="tops-music__body">
                <div className="current-play">
                    <div className="current-imgs">
                        <img src={Img} alt="" />
                    </div>
                    <div className="current-songs">
                        <div className="box-music box-music--header">
                            <span className="stt">1</span>
                            <p className="content">
                                <span className="name-song">Anh Yeu Em</span>
                                <span className="singer-song">Khắc Việt</span>
                            </p>
                            <div className="action">
                                <a href="#">
                                    <i className="fa fa-cloud-download-alt" aria-hidden="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-ellipsis-v" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="queue-music">
                    {showMusic(audios)}
                </div>
                <div className="read-more">
                    <a href="#">Read More</a>
                </div>
            </div>
        </nav>

    );
}

export default TopMusic;