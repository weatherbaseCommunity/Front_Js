import React, { Component } from 'react';
import { Routes , Route} from 'react-router-dom';

import TestPage from './pages/testPage';

function App() {
  return (
    <div className="App">
      {/*헤더 만들기 없으면 말고*/}
        <Routes>
          <Route path='/' element={<TestPage />}></Route>
          <Route path='/sub/*' element={<div>sub</div>}></Route>
          <Route path='*' element={<div>404 Not Found</div>}></Route>
        </Routes>
    </div>
  );
}

export default App;
