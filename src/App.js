import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ContentLoader from './Components/Common/ContentLoader.js';
import BlogPage from './Components/Pages/Blog/Blog.js';
import HomePage from './Components/Pages/Home/Home.js';
import ContactPage from './Components/Pages/Contact/Contact.js'
import Posts from './Api.js';

class App extends Component {
  PostsApi = new Posts();
  nav = [
    { title: "Home", component: HomePage, props: {} },
    { title: "Blog", component: BlogPage, props: {posts: this.PostsApi.getAllPosts()} },
    { title: "Contact", component: ContactPage, props: {} }
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
        <ContentLoader id={this.contentAreaID} defaultComponent={HomePage} />
      </div>
    );
  }
}

export default App;
