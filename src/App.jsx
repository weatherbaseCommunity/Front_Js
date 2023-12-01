import React, { Component } from 'react';
import { Routes , Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sub/*' element={<div>sub</div>}></Route>
          <Route path='*' element={<div>404 Not Found</div>}></Route>
        </Routes>
    </div>
  );
}

export default App;
