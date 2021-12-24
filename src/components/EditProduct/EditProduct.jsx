import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form, Input, InputNumber } from "antd";
import { productsContext } from "../../contexts/productsContext";
import "./EditProduct.css"

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const [form] = Form.useForm();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);
  const onFinish = (values) => {
    console.log("Success:", values);
    updateProduct(params.id, values).then(() => navigate("/admin"));
  };
  return (
    <div className="editProducts" style={{ marginTop: "15px" }}>
      <h2 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>Edit product</h2>
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
          name="brand"
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
          </div>
        <Form.Item
          wrapperCol={{
            offset: 9,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={{marginLeft: '17%'}}>
            Edit product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;