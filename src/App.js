import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DetailsActions } from './Actions/DetailsActions';

function App() {
  const[input, setInput]=useState({
    name:"",
    email:"",
    Password:""
  })
  const dispatch= useDispatch();
  return (
    <div className="App">
     <input  onChange={(e)=>{setInput({...input,name:e.target.value})}}className='sizing' placeholder="name"></input>
     <input  onChange={(e)=>{setInput({...input,email:e.target.value})}}className='sizing' placeholder="email"></input>
     <input  onChange={(e)=>{setInput({...input,Password:e.target.value})}}className='sizing' placeholder="Password"></input>
     <button onClick={()=>{
      console.log(input)
      dispatch(DetailsActions(input))}} className='sizing'>SUBMIT</button>
    </div>
  );
}

export default App;


