import axios from "axios";
import './App.css';
import {useState,useEffect} from "react";
import UserList from "./UserList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((result)=>{
      setUser(result.data)
    })},[])
  return (
    <div className="app">
      <h1 id="title">Pick Your Player</h1>
        <div className="header">
     
        {users.map((user)=>(<UserList user={user}/>))}

    
    </div></div>
  
  );
}

export default App;
