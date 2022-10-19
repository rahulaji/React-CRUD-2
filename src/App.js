import './App.css';
import {useState} from 'react'
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
import AddUser from './component/AddUser';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import EditUser from './component/EditUser';

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
           <Route path='/dashboard' element={<Dashboard data={{data,users,setUsers}}/>}/>
           <Route path='/add-user' element={<AddUser data={{users,setUsers}}/>}/>
           <Route path='/edit-user/:id' element={<EditUser data={{users,setUsers}}/>}/>
           <Route path='*' element={<Navigate to='/add-user'/>}/>
       </Routes>
    
    </BrowserRouter>
       
        
   </div>
 
  </>
}

export default App;
