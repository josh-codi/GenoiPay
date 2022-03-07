import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Home from './Pages/Home';
import Wallet from './Pages/Wallet';

function App() {
  return (
    <div className="App row">      
      <SideBar/>  
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='wallet' element={<Wallet/>}/>
        </Routes>
    </div>
  );
}

export default App;
