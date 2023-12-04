import React, { Component } from 'react';
import { Routes , Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Home from './pages/home';

const tempTheme = {
  firstColor: 'palevioletred',
  secondColor: 'lightgray',
  fontFamily: 'Arial, sans-serif',
}

function App() {
  return (
    <ThemeProvider theme={tempTheme}>
      <div className="App">
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/sub/*' element={<div>sub</div>}></Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
