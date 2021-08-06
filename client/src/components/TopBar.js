import React from 'react';
import './topbar.css';

const TopBar = ({user}) => {
  return (
    <div className="topbar">
      <div className="topbar-appname">
        <h1>Time Management</h1>
      </div>
      <div className="topbar-username">
        <h1>Hello {user.name}!</h1>
      </div>
    </div>
  )
}

export default TopBar;
