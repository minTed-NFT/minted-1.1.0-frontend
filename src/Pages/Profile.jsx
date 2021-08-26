import React, {Component} from 'react'

import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Userinfo from "../Components/Userinfo";


const Profile = () => {


   let { id } = useParams()

   console.log(id);
   return (
   <div>
      <h1>This is a sample Profile Page with ID: {id}</h1>
   </div>)
}


export default Profile