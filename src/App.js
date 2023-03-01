import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import './App.css';
import { Hello } from './Test.js';

function App() {


  Hello();

  return (
    <div className="App">

    <div style={{marginTop: "50px"}}>
      <a target="blank" href="https://www.facebook.com/sharer/sharer.php?u=https://www.comicrelief.com/rednoseday&quote=Rednoseday%202023!">old straight link url</a>
    </div>

    <div style={{marginTop: "50px"}}>
      <a target="blank" href="https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer">new straight link url</a>
    </div>

    <div style={{marginTop: "50px"}}>
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


    </div>
  );
}

export default App;
