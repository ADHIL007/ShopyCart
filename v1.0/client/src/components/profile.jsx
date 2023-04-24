import React from "react";

function Profile(props) {
  return (
    <div className="profile-container">
      <h3 className="profile-header">PROFILE</h3>
      <div className="profile-image-container">
        <img className="profile-image" src="https://picsum.photos/200" alt="profile" />
        
      </div>
      <h3 className="profile-name">{props.name}</h3>
      <p className="profile-email">{props.email}</p>
      <div className="profile-stats-container">
        <p className="profile-stat-item">
          Total Successful Purchases: <span className="profile-stat-value">12</span>
        </p>
        <p className="profile-stat-item">
          Satisfactory Rate: <span className="profile-stat-value">98%</span>
        </p>
      </div>


    </div>
  );
}

export default Profile;
