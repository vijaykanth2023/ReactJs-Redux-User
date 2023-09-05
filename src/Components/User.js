import React from 'react'

const User = ({name,id,password}) => {
  return (
    <div>
      <ul className="user_list_view mx-auto my-4">
        <li><p><span className='card_title'>Name :</span>  {name}</p></li>
        <li><h3><span className='card_title'>Id :</span> {id}</h3></li>
        <li><p><span className='card_title'>Password :</span> {password}</p></li>
      </ul>
    </div>
  )
}

export default User
