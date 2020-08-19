import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [repos,setrepos]=useState([{}])
  let [fetching,setFetching]=useState(false)
  useEffect(()=>{
    async function getData(){
      setFetching(true)
      let response=await fetch('https://api.github.com/users/SardarRameez/repos')
      let data=await response.json()
      setrepos(data)
      setFetching(false)
      console.log(data)
    }
    getData()

  },[])
  useEffect(()=>{
    async function postData(){
      let response=await fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        body:JSON.stringify({
          name:"rameez",
          userID:10,
        }),
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      let post=await response.json()
      console.log(post)
    }
    postData()
  },[])

  if(fetching){
    return "Loading..."
  }
  return (
    <div>
      <ul>
        <strong>Data from Api</strong>
        {repos.map((repo, id)=>
        <li key={id}>{repo.name}</li>
        )}

        
      </ul>
    </div>
  );
}

export default App;
