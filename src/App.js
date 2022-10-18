import './App.css';
import {useState} from 'react'
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';

function App() {
   let data={
    earningsMonthly:"40,000",
    earningsAnnual:"215,000",
    task:20,
    pendingRequest:18
   }
   const [value,setValue]=useState("")
  return <>
   <div id="wrapper">
       <Sidebar/>
       <h1>{value}</h1>
       <Dashboard data={{data,setValue}}/> 
   </div>
 
  </>
}

export default App;
