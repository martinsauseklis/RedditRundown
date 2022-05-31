import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Categories } from './components/Categories'
import { About } from "./components/About";
import { Article } from "./components/Article";
import { MyHistory } from "./components/MyHistory";
import { Header } from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/history" element={<MyHistory />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
