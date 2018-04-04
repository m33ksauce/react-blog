import React, { Component } from 'react';
import Post from './Post.js'

class BlogRoll extends Component {
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

export default BlogRoll;