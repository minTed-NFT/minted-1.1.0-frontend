import React from 'react'

import { useParams } from "react-router-dom";

import UserInfo from '../Components/profilePage/Userinfo'


const Profile = () => {
   let {username} = useParams()
   return <main>
      <UserInfo username = {username} />

   </main>
}


export default Profile