import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userdelete } from "../store/reducers/UserReducer";


const Users = () => {
 
  const {users} = useSelector((state)=> state.UserReducer);
  const dispatch = useDispatch()
  const deleteHandler = (index)=> {
    dispatch(userdelete(index))
  }
  
  return (
    <div className="max-w-screen-xl p-10 bg-red-100 m-auto ">
      <h1 className="text-2xl font-bold text-red-900">User List</h1>
       <ul>
       {users.map((user,index)=> {
        return (
          <li key={user.id}>
            <h1>{user.name} <span onClick={()=> deleteHandler(index)} className="font-bold text-red-900 cursor-pointer">X</span></h1>
          </li>
        )
       })}
       </ul>
    </div>
  );
};

export default Users;
