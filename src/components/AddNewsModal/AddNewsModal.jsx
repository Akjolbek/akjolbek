
import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Input } from "antd";

import { newsContext } from "../../contexts/newsContext";

const AddNewsModal = () => {
  const { createNews } = useContext(newsContext);
  const { getNews } = useContext(newsContext);
  useEffect(() => {
    getNews();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    createNews(values).then(() => handleCancel());
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add work
      </Button>
      <Modal
        title="Add news"
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
            label="News title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input news title!",
              },
            ]}
          >
           <Input />
           </Form.Item>

           <Form.Item
            label="Image"
            name="image1"
            rules={[
              {
                required: true,
                message: "Please input URL of image 1!",
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
              Add work
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewsModal;