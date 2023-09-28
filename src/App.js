import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import UserDetails from './components/User/UserDetails';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Profile></Profile>}></Route>
        <Route path='/user/:userId' element={<UserDetails></UserDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
