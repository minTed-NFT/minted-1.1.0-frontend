import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Userinfo from "../Components/Userinfo";
function Profile(){
   let { id } = useParams()
   return(<>
      {id}
   <Userinfo uid={id}/>
   </>)
}
export default Profile