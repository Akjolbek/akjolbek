import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form, Input, InputNumber } from "antd";
import { doorsContext } from "../../contexts/doorsContext";

const EditDoor = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneDoor, oneDoor, updateDoor } =
    useContext(doorsContext);
  const [form] = Form.useForm();
  useEffect(() => {
    getOneDoor(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneDoor);
  }, [oneDoor]);
  const onFinish = (values) => {
    console.log("Success:", values);
    updateDoor(params.id, values).then(() => navigate("/admin"));
  };
  return (
    <div className="editDoors" style={{ marginTop: "15px" }}>
      <h2 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>Edit door</h2>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        form={form}
      >
        <div style={{width: '500px', marginLeft: '35%'}}>
        <Form.Item
          label={<h3 style={{color: 'white'}}>Brand</h3>}
          name="door"
          rules={[
            {
              required: true,
              message: "Please input categories!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<h3 style={{color: 'white'}}>Price</h3>}
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label={<h3 style={{color: 'white'}}>Image</h3>}
          name="image"
          rules={[
            {
              required: true,
              message: "Please input URL of image 1!",
            },
          ]}
        >
          <Input />
        </Form.Item>
          </div>
        <Form.Item
          wrapperCol={{
            offset: 9,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={{marginLeft: '17%'}}>
            Edit door
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditDoor;