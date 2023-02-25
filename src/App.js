import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import './App.css';

function App() {
  return (
    <div className="App">

    <h1>Social Media Links</h1>

    <a href="https://www.facebook.com/dialog/share?app_id=1456312395501895&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer">test straight url link</a>

    <h1>Package also doesn't pass the quote / message!</h1>
    <div>
      <FacebookShareButton
        url={'https://www.google.com'}
        quote={'dogs dogs dogs'}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>

    </div>
  );
}

export default App;
