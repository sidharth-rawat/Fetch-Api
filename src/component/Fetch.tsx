import axios from "axios";
import React, { useState, useEffect } from "react";

function FetchAPI() {
const [post, setPost]: any = useState([]);
const api = async () =>{
  try {
    const response: any = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    setPost([...response.data])
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
api()
},[])

  return (
    <div>
      My API <br />
     <ul>
      {
        <ul>
     {
     post.map((item: any) => (
       <li key={item.id}>
         {item.userId},{item.title}
       </li> 
     ))
     }
     </ul>
      }
      </ul> 
      <br />
    </div>
  );
}
export default FetchAPI;