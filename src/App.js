import './App.css';
import { Routes, Route } from 'react-router-dom';
import MyProfile from './components/MyProfile';
import Navigation from './components/Navigation';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" />
      <Route path="/missions" />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
