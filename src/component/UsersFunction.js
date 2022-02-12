import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';

const UsersFunction = () => {
const [users, setUsers] = useState([])


const userDetails = async() => {
    const response = await axios.get ("https://jsonplaceholder.typicode.com/users")
    setUsers(response.data)
}

    useEffect(() => {
        userDetails()
        console.log(users)

    })
  return (
    <div>{users.map((user)=>{
        return <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
            <h3>{user.address.street}</h3>
            <h3>{user.address.city}</h3>
            <h3>{user.address.geo.lat}</h3>
        </div>
    })}</div>
  )
}

export default UsersFunction