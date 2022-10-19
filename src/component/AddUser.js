import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function AddUser(props) {
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [batch,setBatch]=useState("");
  let [mobile,setMobile]=useState("");
  let navigate= useNavigate();

  let handleSumit=()=>{
    //get the data from the onclick event
   let newdata={name,email,batch,mobile}
    // clone the state data
   let data=[...props.data.users]
   //push the data to the newdata
   data.push(newdata)
   //upadte the data to new cloned var
   props.data.setUsers(data)
    
   navigate('/dashboard')
   }

  return <div className='mx-auto col-10'>
  <Form>
       <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
       </Form.Group> 

      <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
            <Form.Label>Batch</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="number" placeholder="Enter mobile number" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSumit()}>
        Submit
      </Button>

    </Form>
  </div>
    
  }

export default AddUser