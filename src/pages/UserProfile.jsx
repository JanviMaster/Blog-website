import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile-header">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="user-info">
          <h2 className="user-name">John Doe</h2>
          <p className="user-email">john.doe@example.com</p>
        </div>
      </div>
      <div className="user-bio">
        <h3>About Me</h3>
        <p>
          Hi, I'm John Doe, a passionate web developer with a love for creating
          engaging and dynamic user experiences. In my free time, I enjoy
          hiking, photography, and learning about new technologies.
        </p>
      </div>
      <div className="user-stats">
        <div className="stat">
          <h4>Posts</h4>
          <p>34</p>
        </div>
        <div className="stat">
          <h4>Followers</h4>
          <p>120</p>
        </div>
        <div className="stat">
          <h4>Following</h4>
          <p>80</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
