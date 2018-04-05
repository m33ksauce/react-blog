import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ContentLoader from './Components/Page/ContentLoader.js';
import BlogRoll from './Components/BlogRoll.js';
import Welcome from './Components/Welcome.js';
import Posts from './Api.js';

class App extends Component {
  PostsApi = new Posts();
  nav = [
    { title: "Home", component: Welcome, props: {} },
    { title: "Blog", component: BlogRoll, props: {posts: this.PostsApi.getAllPosts()} }
  ];
  contentAreaID = "content-area";

  makeNavHandler(item, elementID) {
    console.log(item.props)
    return function() {
      ReactDOM.render(React.createElement(item.component, item.props),
        document.getElementById(elementID));
    }
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Blog</h1>
        </header>
        <nav>
          {this.nav.map((link) => 
            <ul key={link.title}><a href="#" 
              onClick={this.makeNavHandler(link, this.contentAreaID)}>{link.title}</a></ul>)}
        </nav>
        <ContentLoader id={this.contentAreaID} defaultComponent={Welcome} />
      </div>
    );
  }
}

export default App;
