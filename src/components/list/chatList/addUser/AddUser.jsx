import React from "react";
import "./adduser.css";

const AddUser = () => {
  return (
    <div className="myForm">
      <form>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="userAdd">
        <div className="detailUser">
          <img src="./avatar.png" alt="" />
          <span>Jane Doe</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
