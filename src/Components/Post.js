import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postData: this.props.post
        }
    }

    render() {
        return(<div id={this.key}>
            <b>{this.state.postData.title}</b>
            <br />
            <i>{this.state.postData.previewText}</i>
        </div>
        )
    }
}

export default Post;