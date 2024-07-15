import React from 'react';
import '../styles/Sidebar.css';


const Sidebar = () => (
  <aside className="sidebar">
    <div className="quickstart-guide">
    
      <ul>
      <h2>QUICKSTART GUIDE</h2>
        <li>ACTIVATE YOUR ACCOUNT</li>
        <li>COMPANY INFOMATION</li>
        <li>API INTEGRATION</li>
        <li>MAP SECURITY LOGS</li>
        <li>SET UP TEAMS</li>
        <li>DISTRIBUTE USER ACCESS</li>
      </ul>
    </div>
    <div className="resources">
      
      <ul>
      <h2>RESOURCES</h2>
        <li>API KEYS</li>
        <li>REFERENCE DOCUMENTS</li>
        <li>DEVELOPER DOCUMENTS</li>
        <li>SECURITY SETUP GUIDE</li>
      </ul>
    </div>
  </aside>
);

export default Sidebar;




