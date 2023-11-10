
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './Footer/LoginPage/Login';
import Explore from './pages/explore/Explore';
import Explorebtn from './pages/explore/exploreButton/Explorebtn';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/exploreBtn' element={<Explorebtn/>}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
