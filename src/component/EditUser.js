import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';


function EditUser(props) {
     let params=useParams();
     let navigate= useNavigate();
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [batch,setBatch]=useState("");
    let [mobile,setMobile]=useState("");
    
    useEffect(()=>{
        if(params.id<props.data.users.length)
        { 
            setName(props.data.users[params.id].name);
            setEmail(props.data.users[params.id].email);
            setBatch(props.data.users[params.id].batch);
            setMobile(props.data.users[params.id].mobile);

        }
        else
        {
            navigate('/dashboard')
        }
 },[])
  
  
    let handleSumit=()=>{
      //get the data from the onclick event
     let newdata={name,email,batch,mobile}
      // clone the state data
     let data=[...props.data.users]
     //push the data to the newdata
     data.splice(params.id,1,newdata)
     //upadte the data to new cloned var
     props.data.setUsers(data)
     navigate('./dashboard')

    
    }
  return <div className='mx-auto col-10'>
  <Form>
       <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
       </Form.Group> 

      <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
            <Form.Label>Batch</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="number" placeholder="Enter mobile number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSumit()}>
        Submit
      </Button>

    </Form>
  </div>
}

export default EditUser