import axios from "axios";
import React, { useState, useEffect } from "react";

function FetchAPI() {
//   const [data, setData] = useState([]);
  
  const [post, setPost] = useState([]);
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
        console.log(res)
        setPost(res.data)
    })
})
  //Get Method
//   const apiGet = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setData(json);
//       });
//   };

  return (
    <div>
      My API <br />
      {/* <button onClick={apiGet}>Fetch API</button> */}
     <ul>{post.map(post =>(
        <li key={post.id}>{post.title}</li>
      ))}
      </ul> 
      <br />
      <div>
        {/* <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.userId},{item.title}
            </li>
          ))}
        </ul> */}
      </div>
      <div>
      </div>
    </div>
  );
}

export default FetchAPI;