import React, { Component } from 'react';

class Span extends Component {

    render() {
        return (
            <span style={{"--i" : this.props.duration}}></span>
        );
    }
}

export default Span;