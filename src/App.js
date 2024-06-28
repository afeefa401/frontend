import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './component/error.jsx';
import Home from './component/home.jsx';

import Logo from './component/logo.jsx';

import Counter from './component/sign.jsx';
function App() {
  return (
    <>
    
  <BrowserRouter>  
    <Routes>
  <Route path="/counter"element={<Counter />}></Route>
  <Route path="/logo"element={<Logo />}></Route>
  <Route path= '*'element={< Error />}></Route>
  <Route path= '/home'element={< Home />}></Route>
  </Routes>
  </BrowserRouter>  
   </>
  
  );
}

export default App;
