import { useEffect, useState } from "react";
import LoopCard from "./LoopCard";



export default function APIfetch(){

const [UserDetails,setUserDetails]=useState([]);


useEffect(()=>{
fetch('https://fakestoreapi.com/users').then(
    async(response)=>{
        const data=await response.json();
        setUserDetails(data);
        console.log(UserDetails);
    }
)
},[]
)



return(
   <LoopCard UserDetails={UserDetails}/>
)

}