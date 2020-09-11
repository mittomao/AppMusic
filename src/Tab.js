import React, { useState, useRef } from 'react';

const Tab = (props) => {
    const [activeS , setState] = useState(false);
    const hanldClick = () => {
        let currentS = props.isCurrent;
        setState({
            activeS : currentS
        });
        // 
        props.changeActive(activeS);  
    }

    return ( 
        <a href={props.url} className = {props.isCurrent ? "active" : ""} onClick = {() => hanldClick()}>{props.title}</a>
    );
}
export default Tab;