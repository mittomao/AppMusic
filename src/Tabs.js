import React, { Component } from 'react';
import Tab from './Tab';



class Tabs extends Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        console.log(this.props.activeTab.activeTab);
        return (
            <div>
                <ul className="nav nav-tabs">
                    {props.dataTab.map(function(tab,i){
                        return (
                            <Tab 
                                data  = {tab}
                                isActive = {this.props.activeTab.activeTab === tab.name}
                                handleClick = {this.props.changeTab.bind(this,tab)}
                            />
                        )
                    }.bind(this))}
                </ul>
            </div>
        );
    }
}

export default Tabs;