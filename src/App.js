import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar/Nav';
import MyProfile from './components/Profile/MyProfile';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rockets';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
