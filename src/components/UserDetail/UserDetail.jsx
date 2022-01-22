import React, { useEffect, useState } from "react";

import userDetails from "./UserDetail.css";

const UserDetail = ({user}) => {
  
  return (
    <div className="user-container">
          <div className="user">
            <div className="user-detail">
              <p>Todo ID</p>
              <p>{user.id}</p>
            </div>
            <div className="user-detail">
              <p>Todo Title</p>
              <p>{user.title}</p>
            </div>
            <div className="user-detail">
              <p>User ID</p>
              <p>{user.userId}</p>
            </div>
            <div className="user-detail">
              <p>Name</p>
              <p>{user.name}</p>
            </div>
            <div className="user-detail">
              <p>Email</p>
              <p>{user.name}</p>
            </div>
          </div>
    </div>
  );
};

export default UserDetail;
