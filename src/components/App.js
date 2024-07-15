import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import '../styles/App.css';

const App = () => (
  <div className="app">
    <Header />
    <div className="main">
      <Sidebar />
      <Dashboard />
    </div>
  </div>
);

export default App;
