import React, { useEffect, useState } from "react";

import "./UserDetail.css";

const UserDetail = ({ user, data, toggle }) => {

  return (
    <div className="user-container">
      <div className="user">
        <div className="user-detail">
          <span className="user-detail-head">Todo ID:</span>
          <span>{data.id}</span>
        </div>
        <div className="user-detail">
          <span className="user-detail-head">Todo Title:</span>
          <span>{data.title}</span>
        </div>
        <div className="user-detail">
          <span className="user-detail-head">User ID:</span>
          <span>{user.id}</span>
        </div>
        <div className="user-detail">
          <span className="user-detail-head">Name:</span>
          <span>{user.name}</span>
        </div>
        <div className="user-detail">
          <span className="user-detail-head">Email:</span>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
