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

class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.posts = this.props.posts;
        this.elementId = this.props.elementId;
    }
    
    render() {
        return (
            <div id={this.elementId}>
                {this.posts.map(post => 
                    <Post key={post.id} post={post} />)}
            </div>
        )
    }
}

export default BlogPage;