import './App.css';
import {useState} from 'react'
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
import AddUser from './component/AddUser';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
   let data={
    earningsMonthly:"40,000",
    earningsAnnual:"215,000",
    task:20,
    pendingRequest:18
   }

   let [users,setUsers] =useState([
    {
      name:"Rahul",
      email:"rahul123@gmail.com",
      batch:"B39WDT",
      mobile:"9878654564"
    },
    {
      name:"Santhosh",
      email:"santhosh123@gmail.com",
      batch:"B39WDT",
      mobile:"9877895455"
    },
    {
      name:"Mani",
      email:"mani123@gmail.com",
      batch:"B39WDT",
      mobile:"9878544566"
    }
   ])
   
  return <>
   <div id="wrapper">
    <BrowserRouter>
       <Sidebar/>
       <Routes>
           <Route path='/dashboard' element={<Dashboard data={{data,users}}/>}/>
           <Route path='/add-user' element={<AddUser data={{users,setUsers}}/>}/>
       </Routes>
    
    </BrowserRouter>
       
        
   </div>
 
  </>
}

export default App;
