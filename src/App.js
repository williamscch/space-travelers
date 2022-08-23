import './App.css';
import { Routes, Route } from 'react-router-dom';
import MyProfile from './components/profile/MyProfile';
import Nav from './components/Nav';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" />
      <Route path="/missions" />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
