import React from 'react'
import { Button, Form, Input } from "antd";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsSlice';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async(values) =>{
    // console.log("Recieved Inputs : ", values);
    try{
      dispatch(showLoading());
      const response = await axios.post('/api/user/register',values);
      dispatch(hideLoading());
      if(response.data.success){
        toast.success(response.data.message);
        toast("Redirecting to login page");
        navigate("/login");
      }
      else{
        toast.error(response.data.message);
      }
    } catch(error){
      // if (error.response) {
      //   // Server responded with 4xx/5xx status
      //   toast.error(error.response.data.message || 'Registration failed');
      // } else if (error.request) {
      //   // No response received
      //   toast.error('No response from server');
      // } else {
      //   // Other errors
      //   toast.error('Request setup error');
      // }
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };
  return (
    <div className='authentication'>
      <div className='authentication-form item p-3'>
        <h1 className='item-heading'>Nice to mee you</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Name' name='name'>
            <Input placeholder='Name'/>
          </Form.Item>
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email ID'/>
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input placeholder='Password' type='password'/>
          </Form.Item>
          <Button className='primary-button my-2' htmlType='submit'>REGISTER</Button>
          <Link to='/login' className='anchor'>CLICK HERE TO LOGIN</Link>
        </Form>
      </div>
    </div>
  )
}

export default Register