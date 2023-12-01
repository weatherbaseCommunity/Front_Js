import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< Updated upstream

// redux-toolkit 기본 세팅
import store from './redux/store';
=======
// Redux-toolkit 세팅
import { store } from './redux/store';
>>>>>>> Stashed changes
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< Updated upstream
  <React.StrictMode>
    <Provider store={store}> {/*redux-toolkit 기본 세팅*/}
=======
  <React.StrictMode>  
    <Provider store={store}> {/* Redux-toolkit 세팅 */}
>>>>>>> Stashed changes
      <App />
    </Provider>
  </React.StrictMode>
);
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
