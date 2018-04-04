import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: this.props.key,
            postData: this.props.post
        }
    }

    render() {
        return(<div id={this.state.key}>
            <b>{this.state.postData.title}</b>
            <br />
            <i>{this.state.postData.previewText}</i>
        </div>
        )
    }
}

export default Post;