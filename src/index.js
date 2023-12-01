import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

// redux-toolkit 기본 세팅
import store from './redux/store';
import { Provider } from 'react-redux';

// react-router-dom 기본 세팅
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/*redux-toolkit 기본 세팅*/}
      <BrowserRouter> {/*react-router-dom 기본 세팅*/}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

