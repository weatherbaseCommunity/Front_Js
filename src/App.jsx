import React from 'react';
import { Routes , Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/home';
import Writing from './components/Writing';
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage';
import GoogleRedirect from './services/auth/authgoogle';
import NaverRedirect from './services/auth/authnaver';
import KakaoRedirect from './services/auth/authkakao';
import PostingDetail from './components/PostingDetail';

import TestPage from './pages/testPage';
import MyPage from './pages/MyPage';

const tempTheme = {
  firstColor: 'palevioletred',
  secondColor: 'lightgray',
  fontFamily: 'Arial, sans-serif',
}

const LoginRoutes = [
  { path: "/", component: <Home />},
  { path: "/writing", component: <Writing />},
  { path: "/mypage", component: <div>my page</div>},
]
const LogoutRoutes = [
  { path: "/", component: <Home />},
  { path: "/SignIn", component: <SignInPage />},
  { path: "/signUp", component: <SignUpPage />},
  { path: "/authgoogle", component: <GoogleRedirect />},
  { path: "/authnaver", component: <NaverRedirect />},
  { path: "/authkakao", component: <KakaoRedirect />},
]

function App() {
  return (
    <ThemeProvider theme={tempTheme}>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/writing' element={<Writing />}></Route>
            <Route path='/signIn' element={<SignInPage />}></Route>
            <Route path='/signUp' element={<SignUpPage />}></Route>
            <Route path='/authgoogle' element={<GoogleRedirect />}></Route>
            <Route path='/authnaver'  element={<NaverRedirect />}></Route>
            <Route path='/authkakao'  element={<KakaoRedirect />}></Route>
            <Route path='/mypage'  element={<MyPage />}></Route>
            <Route path='/postingdetail/:id'  element={<PostingDetail />}></Route>
            <Route path='/test'  element={<TestPage />}></Route>
            <Route path='/sub/*' element={<div>sub</div>}></Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
