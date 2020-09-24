import React  from 'react';

const Tab = (props) => {

    const handleClick = ()=> {
        props.handleClick(props.data.name);
    }
    // console.log(props.isActive);
    return ( 
    
        <li className= {props.isActive ? "active" : "" } onClick={handleClick} >
            <span>{props.data.name}</span>
        </li>
    );
}

export default Tab;