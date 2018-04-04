import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogRoll from './Components/BlogRoll.js';

class App extends Component {
  myPosts = [
    {id: 2, title: "My second blog post", previewText: "Not much more than last time"},
    {id: 1, title: "My first blog post", previewText: "Not a lot to say"}
  ]
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Blog</h1>
        </header>
        <BlogRoll elementId="blogroll" posts={this.myPosts}/>
      </div>
    );
  }
}

export default App;
