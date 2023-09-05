import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as userAction from "../store/actions/user"
import { Link } from 'react-router-dom';
const Home = () => {
    const [user, setUser]=useState({
        id :"",
        name : "",
        password : ""
    });
    const dispatch =useDispatch();
    const inputhandler = (event) =>{
        const {name,value} = event.target;
        console.log(name, value);
        setUser((prevItems)=>{
            return{
                ...prevItems,
                [name]:value,
            };
        })
    }
    const addUser = () =>{
        dispatch(userAction.adduser(user))
        setUser({
            id :"",
            name : "",
            password : ""
        });
    };
  return (
    <div>
    <Col xs='4' className='mx-auto'>
      
      <h1 className='text-center my-5'>Add Users</h1>
      <input 
        name="id" 
        placeholder='Enter Id' 
        className='w-100'
        onChange={inputhandler}
        value={user.id}
      ></input><br />
      <input 
        name="name" 
        placeholder='Enter Name' 
        className='w-100' 
        onChange={inputhandler}
        value={user.name}
      ></input><br />
      <input 
        name="password" 
        type='password' 
        placeholder='Enter Password' 
        className='w-100'
        onChange={inputhandler} 
        value={user.password}
      ></input><br />
      <button type="submit" onClick={addUser} className='d-flex mx-auto'>Submit</button>
      <hr />
      <Link className="list_button d-flex mt-3" to="/Users">
        <h6 className='mx-auto'>user List</h6>
        </Link>
    </Col>
    
    </div>
  )
}

export default Home
