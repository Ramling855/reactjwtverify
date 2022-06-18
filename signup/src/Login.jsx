import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("Name"));
    setLastName(localStorage.getItem("Price"));
    setCheckbox(localStorage.getItem("Brand"));
    setCheckbox1(localStorage.getItem("Quantity"));
  });

  const onFinish = (values) => {
    console.log("Success:", values);

    axios
      .put(`http://localhost:7000/crud/updateall/${id}`, { values })
      .then((all) => console.log("data"))
      .catch((e) => console.log("errr",e));
  };
  console.log(id, firstName, lastName, checkbox, checkbox1);
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
        label={firstName}
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
        label={lastName}
        name="price"
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
        label={checkbox}
        name="brand"
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
        label={checkbox1}
        name="quantity"
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
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          update
        </Button>
      </Form.Item>
      <Link to="/Data">go to upadted date</Link>
    </Form>
  );
};

export default App;
