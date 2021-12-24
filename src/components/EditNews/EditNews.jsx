import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form, Input } from "antd";
import "./EditNews.css"
import { newsContext } from "../../contexts/newsContext";

const EditNews = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneNews, oneNews, updateNews } =
    useContext(newsContext);
  const { getNews } = useContext(newsContext);
  const [form] = Form.useForm();
  useEffect(() => {
    getOneNews(params.id);
    getNews();
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneNews);
  }, [oneNews]);
  const onFinish = (values) => {
    console.log("Success:", values);
    updateNews(params.id, values).then(() => navigate("/admin"));
  };
  return (
    <div className="editNews" style={{ marginTop: "15px" }}>
      <h2 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>Edit news</h2>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <div style={{width: '500px', marginLeft: '35%'}}>
          <Form.Item
            label={<h3 style={{color: 'white'}}>News title</h3>}
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
            label={<h3 style={{color: 'white'}}>Description</h3>}
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<h3 style={{color: 'white'}}>Paragraph</h3>}
            name="paragraph"
            rules={[
              {
                required: true,
                message: "Please input paragraph!",
              },
            ]}
          >
            <Input />
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
              Edit news
            </Button>
          </Form.Item>
        </Form>
    </div>
  );
};

export default EditNews;