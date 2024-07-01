import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AddTimelinePage from './components/AddTimelinePage';
import TimelineList from './components/TimelineList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-timeline" element={<AddTimelinePage />} />
        <Route path="/timelines" element={<TimelineList />} />
      </Routes>
    </Router>
  );
}

export default App;