import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import '../styles/Dashboard.css';

const lineChartData = [
  { name: '6:45', value: 300 },
  { name: '6:50', value: 500 },
  { name: '6:55', value: 200 },
  { name: '7:00', value: 278 },
  { name: '7:05', value: 189 },
  { name: '7:10', value: 239 },
  { name: '7:15', value: 349 },
];

const barChartData = [
  { name: '6:45', events: 30 },
  { name: '6:50', events: 50 },
  { name: '6:55', events: 20 },
  { name: '7:00', events: 55 },
  { name: '7:05', events: 18 },
  { name: '7:10', events: 23 },
  { name: '7:15', events: 34 },
  { name: '7:45', events: 30 },
  { name: '7:50', events: 50 },
  { name: '7:55', events: 96 },
  { name: '8:00', events: 27 },
  { name: '8:05', events: 13 },
  { name: '8:10', events: 23 },
  { name: '8:15', events: 34 },
  { name: '8:45', events: 60 },
  { name: '8:50', events: 50 },
  { name: '8:55', events: 20 },
  { name: '9:00', events: 27 },
  { name: '9:05', events: 18 },
  { name: '9:10', events: 23 },
  { name: '9:15', events: 34 },
  { name: '9:45', events: 30 },
  { name: '9:50', events: 50 },
  { name: '9:55', events: 20 },
  { name: '10:00', events: 27 },
  { name: '10:05', events: 18 },
  { name: '10:10', events: 23 },
  { name: '10:15', events: 34 },
  { name: '6:45', events: 30 },
  { name: '6:50', events: 50 },
  { name: '6:55', events: 20 },
  { name: '7:00', events: 55 },
  { name: '7:05', events: 18 },
  { name: '7:10', events: 23 },
  { name: '7:15', events: 34 },
  { name: '7:45', events: 30 },
  { name: '7:50', events: 50 },
  { name: '7:55', events: 96 },
  { name: '8:00', events: 27 },
  { name: '8:05', events: 13 },
  { name: '8:10', events: 23 },
  { name: '8:15', events: 34 },
  { name: '8:45', events: 60 },
  { name: '8:50', events: 50 },
  { name: '8:55', events: 20 },
  { name: '9:00', events: 27 },
  { name: '9:05', events: 18 },
  { name: '9:10', events: 23 },
  { name: '9:15', events: 34 },
  { name: '9:45', events: 30 },
  { name: '9:50', events: 50 },
  { name: '9:55', events: 20 },
  { name: '10:00', events: 27 },
  { name: '10:05', events: 18 },
  { name: '10:10', events: 23 },
  { name: '10:15', events: 34 },
  { name: '6:45', events: 30 },
  { name: '6:50', events: 50 },
  { name: '6:55', events: 20 },
  { name: '7:00', events: 55 },
  { name: '7:05', events: 18 },
  { name: '7:10', events: 23 },
  { name: '7:15', events: 34 },
  { name: '7:45', events: 30 },
  { name: '7:50', events: 50 },
  { name: '7:55', events: 96 },
  { name: '8:00', events: 27 },
  { name: '8:05', events: 13 },
  { name: '8:10', events: 23 },
  { name: '8:15', events: 34 },
  { name: '8:45', events: 60 },
  { name: '8:50', events: 50 },
  { name: '8:55', events: 20 },
  { name: '9:00', events: 27 },
  { name: '9:05', events: 18 },
  { name: '9:10', events: 23 },
  { name: '9:15', events: 34 },
  { name: '9:45', events: 30 },
  { name: '9:50', events: 50 },
  { name: '9:55', events: 20 },
  { name: '10:00', events: 27 },
  { name: '10:05', events: 18 },
  { name: '10:10', events: 23 },
  { name: '10:15', events: 34 },
  { name: '6:45', events: 30 },
  { name: '6:50', events: 50 },
  { name: '6:55', events: 20 },
  { name: '7:00', events: 55 },
  { name: '7:05', events: 18 },
  { name: '7:10', events: 23 },
  { name: '7:15', events: 34 },
  { name: '7:45', events: 30 },
  { name: '7:50', events: 50 },
  { name: '7:55', events: 96 },
  { name: '8:00', events: 27 },
  { name: '8:05', events: 13 },
  { name: '8:10', events: 23 },
  { name: '8:15', events: 34 },
  { name: '8:45', events: 60 },
  { name: '8:50', events: 50 },
  { name: '8:55', events: 20 },
  { name: '9:00', events: 27 },
  { name: '9:05', events: 18 },
  { name: '9:10', events: 23 },
  { name: '9:15', events: 34 },
  { name: '9:45', events: 30 },
  { name: '9:50', events: 50 },
  { name: '9:55', events: 20 },
  { name: '10:00', events: 27 },
  { name: '10:05', events: 18 },
  { name: '10:10', events: 23 },
  { name: '10:15', events: 34 },
  { name: '6:45', events: 30 },
  { name: '6:50', events: 50 },
  { name: '6:55', events: 20 },
  { name: '7:00', events: 55 },
  { name: '7:05', events: 18 },
  { name: '7:10', events: 23 },
  { name: '7:15', events: 34 },
  { name: '7:45', events: 30 },
  { name: '7:50', events: 50 },
  { name: '7:55', events: 96 },
  { name: '8:00', events: 27 },
  { name: '8:05', events: 13 },
  { name: '8:10', events: 23 },
  { name: '8:15', events: 34 },
  { name: '8:45', events: 60 },
  { name: '8:50', events: 50 },
  { name: '8:55', events: 20 },
  { name: '9:00', events: 27 },
  { name: '9:05', events: 18 },
  { name: '9:10', events: 23 },
  { name: '9:15', events: 34 },
  { name: '9:45', events: 30 },
  { name: '9:50', events: 50 },
  { name: '9:55', events: 20 },
  { name: '10:00', events: 27 },
  { name: '10:05', events: 18 },
  { name: '10:10', events: 23 },
  { name: '10:15', events: 34 },
  { name: '6:45', events: 30 },
  { name: '6:50', events: 50 },
  { name: '6:55', events: 20 },
  { name: '7:00', events: 55 },
  { name: '7:05', events: 18 },
  { name: '7:10', events: 23 },
  { name: '7:15', events: 34 },
  { name: '7:45', events: 30 },
  { name: '7:50', events: 50 },
  { name: '7:55', events: 96 },
  { name: '8:00', events: 27 },
  { name: '8:05', events: 13 },
  { name: '8:10', events: 23 },
  { name: '8:15', events: 34 },
  { name: '8:45', events: 60 },
  { name: '8:50', events: 50 },
  { name: '8:55', events: 20 },
  { name: '9:00', events: 27 },
  { name: '9:05', events: 18 },
  { name: '9:10', events: 23 },
  { name: '9:15', events: 34 },
  { name: '9:45', events: 30 },
  { name: '9:50', events: 50 },
  { name: '9:55', events: 20 },
  { name: '10:00', events: 27 },
  { name: '10:05', events: 18 },
  { name: '10:10', events: 23 },
  { name: '10:15', events: 34 },
  { name: '6:45', events: 30 },
  { name: '6:50', events: 50 },
  { name: '6:55', events: 20 },
  { name: '7:00', events: 55 },
  { name: '7:05', events: 18 },
  { name: '7:10', events: 23 },
  { name: '7:15', events: 34 },
  { name: '7:45', events: 30 },
  { name: '7:50', events: 50 },
  { name: '7:55', events: 96 },
  { name: '8:00', events: 27 },
  { name: '8:05', events: 13 },
  { name: '8:10', events: 23 },
  { name: '8:15', events: 34 },
  { name: '8:45', events: 60 },
  { name: '8:50', events: 50 },
  { name: '8:55', events: 20 },
  { name: '9:00', events: 27 },
  { name: '9:05', events: 18 },
  { name: '9:10', events: 23 },
  { name: '9:15', events: 34 },
  { name: '9:45', events: 30 },
  { name: '9:50', events: 50 },
  { name: '9:55', events: 20 },
  { name: '10:00', events: 27 },
  { name: '10:05', events: 18 },
  { name: '10:10', events: 23 },
  { name: '10:15', events: 34 },
  { name: '6:45', events: 30 },
  { name: '6:50', events: 50 },
  { name: '6:55', events: 20 },
  { name: '7:00', events: 55 },
  { name: '7:05', events: 18 },
  { name: '7:10', events: 23 },
  { name: '7:15', events: 34 },
  { name: '7:45', events: 30 },
  { name: '7:50', events: 50 },
  { name: '7:55', events: 96 },
  { name: '8:00', events: 27 },
  { name: '8:05', events: 13 },
  { name: '8:10', events: 23 },
  { name: '8:15', events: 34 },
  { name: '8:45', events: 60 },
  { name: '8:50', events: 50 },
  { name: '8:55', events: 20 },
  { name: '9:00', events: 27 },
  { name: '9:05', events: 18 },
  { name: '9:10', events: 23 },
  { name: '9:15', events: 34 },
  { name: '9:45', events: 30 },
  { name: '9:50', events: 50 },
  { name: '9:55', events: 20 },
  { name: '10:00', events: 27 },
  { name: '10:05', events: 18 },
  { name: '10:10', events: 23 },
  { name: '10:15', events: 34 },
];

const pieChartData = [
  { name: 'Good', value: 70 },
  { name: 'Risk', value: 30 },
];

const COLORS = ['#00C49F', '#FF8042'];

const Dashboard = () => (
  <main className="dashboard">
    <div className="dashboard-header">
      <div className="chart-container">
        <h3>Events Last Hour</h3>
        <BarChart width={1000} height={100} data={barChartData}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="events" fill="#ff5722" />
        </BarChart>
      </div>
    </div>
    <div className="dashboard-content" style={{ flex: 1 }}>
      <div className="dashboard-card" >
      <div className="arrow-glyph"></div>
      <div className="dashboard-card-content-text">
        <h5>Status: Good</h5>
        <p>3,020</p>
        <h5>Uptime</h5>
        <p>100%</p>
        <h5>Anomalies</h5>
        <p>14</p>
        <h5>Risk Rating</h5>
        </div>
        <PieChart width={200} height={200}>
          <Pie
            data={pieChartData}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
        <div className="dashboard-card">
        <div className="arrow-glyph"></div>
       <h3>Active Users</h3>
      <h1>248</h1>
      </div>
      <div className="dashboard-card" style={{ backgroundColor: '#fa8000' }}>
      <div className="arrow-glyph"></div>
      <h3>Total Consumers</h3>
      <h1>6,992</h1> 
      </div>
      <div className="dashboard-card">
      <div className="arrow-glyph"></div>
        <h3>Users</h3>
        <h1>570</h1>
      </div>
      <div className="dashboard-card">
      <div className="arrow-glyph"></div>
        <h3>Security Status</h3>
        <h1>3,949</h1>
      </div>
      <div className="dashboard-card">
      <div className="arrow-glyph"></div>
        <h3>Healthy Sidecars</h3>
        <h1>8,550</h1>
        <h3>Recent</h3>
        <ul>
          <li><a href="#">DROPBOX-POSTGRES-5QL</a></li>
          <li><a href="#">DJANGO-RDS</a></li>
          <li><a href="#">DROPBOX-STAGING</a></li>
        </ul>
      </div>
    </div>
  </main>
);

export default Dashboard;
