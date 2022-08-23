import {
  HashRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import MyProfile from './components/profile/profile';
import MissionPage from './pages/Missions';
import RocketPage from './pages/Rockets';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<RocketPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/missions" element={<MissionPage />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
