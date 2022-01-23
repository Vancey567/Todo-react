import React, { useEffect, useState } from "react";

import "./UserDetail.css";

// const UserDetail = ({ tododata, callEffect}) => {
const UserDetail = ({ user, data, toggle }) => {
  // const [user, setUser] = useState({});
  // const url = '/users';
  // console.log(tododata);
  console.log(data);
  console.log(toggle);
  // if (user?.length) {
  //   user.map((user) => {
  //     console.log(user);
  //   });
  // }
  // console.log(user.id);

  // const userid = tododata.userId;
  // console.log(userid);
  // let executed = false;

  // function getUser() {
  //   fetch(`${url}/?${userid}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setUser(data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  // console.log(callEffect);

  // getUser();

  // if(userid !== {} && !executed) {
  //   getUser();
  //   executed = true;
  // }

  // useEffect(() => {
  //   console.log("user");
  //   getUser();
  // }, [])

  // console.log(user);

  return toggle ? (
    <div className="user-container">
      <div className="user">
        <div className="user-detail">
          <p className="user-detail-head">Todo ID:</p>
          <p>{data.id}</p>
        </div>
        <div className="user-detail">
          <p className="user-detail-head">Todo Title:</p>
          <p>{data.title}</p>
        </div>
        <div className="user-detail">
          <p className="user-detail-head">User ID:</p>
          <p>{user.id}</p>
        </div>
        <div className="user-detail">
          <p className="user-detail-head">Name:</p>
          <p>{user.name}</p>
        </div>
        <div className="user-detail">
          <p className="user-detail-head">Email:</p>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default UserDetail;
