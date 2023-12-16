import React from 'react';
import { Routes , Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/home';
import Writing from './components/Writing';

const tempTheme = {
  firstColor: 'palevioletred',
  secondColor: 'lightgray',
  fontFamily: 'Arial, sans-serif',
}

function App() {
  return (
    <ThemeProvider theme={tempTheme}>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/writing' element={<Writing />}></Route>
            <Route path='/sub/*' element={<div>sub</div>}></Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
