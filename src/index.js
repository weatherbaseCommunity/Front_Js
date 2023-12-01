import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// redux-toolkit 기본 세팅
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/*redux-toolkit 기본 세팅*/}
      <App />
    </Provider>
  </React.StrictMode>
);

