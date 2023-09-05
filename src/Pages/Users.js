import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../Components/User';
import * as userAction from "../store/actions/user"
const Users = () => {
    const users = useSelector((state)=>{
        return state.users
    }
        );
        console.log(users);
const dispatch = useDispatch();
const removeUser = () => {
  dispatch(userAction.removeuser());
};
return (
    <div>
      <h1 className='d-flex justify-content-center my-5'>Users</h1>
      {users.length !== 0 ? users.map((user)=>{
           return <User name={user.name} id={user.id} password={user.password} />;
      }) : <h3 className="d-flex justify-content-center">No User Found </h3>}
      {users.length !== 0 && <button onClick={removeUser} className='d-flex mx-auto'>Clear Data</button>}
    </div>
  )
}

export default Users
