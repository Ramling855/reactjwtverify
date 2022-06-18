import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const[tok,setTok]=useState();
// useEffect(()=>{
//   localStorage.setItem("token",JSON.stringify(tok))
//   localStorage.removeItem("token")
  const onFinish = (name) => {
    // var name=values.name;
    // var email=values.email;
    // var password=values.password;
    axios
      .post(
        "http://localhost:7000/data/login",
        { name }
      )
      .then((res) => localStorage.setItem("rr",res.data.token))
      .catch((err) => {
        console.log("errr",err);
      });
    console.log("Success:", name);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item
        label="price"
        name="price"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          login in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
