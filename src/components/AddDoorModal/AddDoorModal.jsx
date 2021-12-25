import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";
import { doorsContext } from "../../contexts/doorsContext";

const AddDoorModal = () => {
  const { createDoor } = useContext(doorsContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createDoor(values).then(() => handleCancel());
  };
  return (
    <>
      <Button style={{marginLeft: '2%'}} type="primary" onClick={showModal}>
        Add door
      </Button>
      <Modal
        title="Add door"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Door"
            name="door"
            rules={[
              {
                required: true,
                message: "Please input door!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
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
            label="Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please input URL of image!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add door
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddDoorModal;