import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const imgUrl = "https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif";

const searchForm = (
  <form>
    <input type="text"/>
    <input type="submit" value="Search" />
  </form>
);

const img = <img src={imgUrl}></img>

ReactDOM.render(
  searchForm,
  img,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
