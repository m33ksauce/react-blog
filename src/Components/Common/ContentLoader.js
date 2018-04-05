import React, { Component } from 'react';

class ContentLoader extends Component {
    constructor(props) {
        super(props);
        this.divId = this.props.id;
        this.defaultComponent = this.props.defaultComponent;
    };
    render() {
        return (
            <div id={this.divId}>{React.createElement(this.defaultComponent)}</div>
        );
    };
}

export default ContentLoader;