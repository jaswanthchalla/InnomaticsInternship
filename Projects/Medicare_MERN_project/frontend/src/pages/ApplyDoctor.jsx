import React from 'react';
import Layout from '../components/Layout';
import {Button, Form, Input, Grid, Row, Col, TimePicker} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { showLoading, hideLoading } from '../redux/alertsSlice';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function ApplyDoctor() {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);
    const navigate = useNavigate();
    const onFinish = async(values) => {
        // console.log("Success:", values);
        try{
            dispatch(showLoading());
            const formattedTimings = [
                values.timings[0].format("HH:mm"),
                values.timings[1].format("HH:mm"),
              ];
              const response = await axios.post(
                "/api/user/apply-doctor-account",
                {
                  ...values,
                  timings: formattedTimings, // Use formatted timings
                  userId: user._id,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
            dispatch(hideLoading());
            if(response.data.success){
                toast.success(response.data.message);
                navigate("/");
            }
            else{
                toast.error(response.data.message);
            }
        } catch(error){
            dispatch(hideLoading());
            console.log(error);
            toast.error("Something went wrong");
        }
    }
    return <Layout>
            <h1 className='page-title'>Apply Doctor</h1> <hr/>
            <Form layout='vertical' onFinish={onFinish}>
                <h1 className="item-heading mt-3">Personal Information</h1>
                <Row gutter={20}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="First Name" name="firstName" rules={[{required:true}]}>
                            <Input placeholder="First Name"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Last Name" name="lastName" rules={[{required:true}]}>
                            <Input placeholder="Last Name"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Phone Number" name="phoneNumber" rules={[{required:true}]}>
                            <Input placeholder="Phone Number"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Website" name="website" rules={[{required:true}]}>
                            <Input placeholder="Your Website"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Address" name="address" rules={[{required:true}]}>
                            <Input placeholder="Your Address"/>
                        </Form.Item>
                    </Col>
                </Row> 
                <hr/>
                <h1 className="item-heading mt-3">Professional Information</h1>
                <Row gutter={20}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Specialization" name="specialization" rules={[{required:true}]}>
                            <Input placeholder="Specialization"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Experience" name="experience" rules={[{required:true}]}>
                            <Input placeholder="Experience" type='number'/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Fee Per Consultation" name="feePerConsultation" rules={[{required:true}]}>
                            <Input placeholder="Fee Per Consultation" type='number'/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Timings" name="timings" rules={[{required:true}]}>
                            <TimePicker.RangePicker />
                        </Form.Item>
                    </Col>
                </Row>

                <div className="d-flex justify-content-end">
                    <Button className='primary-button sbt-btn' htmlType='submit'>SUBMIT</Button>
                </div>
            </Form>
        </Layout>
  
}

export default ApplyDoctor