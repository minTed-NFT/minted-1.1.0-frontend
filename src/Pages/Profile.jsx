import React, {Component} from 'react'

import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Userinfo from "../Components/Userinfo";
function Profile(){
   let { id } = useParams()

   console.log(id);
   return (
   <section>
      {id}
   <Userinfo uid={id}/>
   </section>)
}
export default Profile