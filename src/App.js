import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import './App.css';

function App() {
  return (
    <div className="App">

    <h1>Social Media Links</h1>

    <div>
    <a style={{marginTop: "50px"}} href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Famazon.co.uk&quote=dogs">old straight link url</a>
    </div>

    <div style={{marginTop: "50px"}}>
    <a href="https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer">new straight link url</a>
    </div>

    <h1>Package also doesn't pass the quote / message:</h1>
    <div>
      <FacebookShareButton
        url={'https://www.google.com'}
        quote={'dogs, dogs, dogs I love dogs!'}
        hashtag="#woof"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>

    </div>
  );
}

export default App;
