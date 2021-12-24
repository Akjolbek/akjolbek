import { Form, Input, Select, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import "./CreditForm.css"
const { Option } = Select;

const creditForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
     
  return (
      <div style={{marginTop:"50px"}}>
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label={<h4 style={{color: 'white'}}>Username</h4>}>
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[{ required: true, message: 'Username is required' }]}
          >
            <Input style={{ width: 350 }} placeholder="Please input" />
            <Form.Item
            name="username"
            noStyle
            rules={[{ required: true, message: 'Username is required' }]}
          />
          </Form.Item>          
        </Space>        
      </Form.Item>
      <Form.Item label={<h4 style={{color: 'white'}}>Adress</h4>}>
        <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            rules={[{ required: true, message: 'Province is required' }]}
          >
            <Select placeholder="Select province">
              <Option value="Бишкек">Бишкек</Option>
              <Option value="Ош">Ош</Option>
            </Select>
          </Form.Item>
          <br/>
          <br/>
          <Form.Item
            name={['address', 'street']}
            noStyle
            rules={[{ required: true, message: 'Street is required' }]}
          >
            <Input style={{ width: '300px' }} placeholder="Street" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label={<h4 style={{color: 'white'}}>Birth Date</h4>} style={{ marginBottom: 0 }}>
        <Form.Item
          name="year"
          rules={[{ required: true }]}
        >
          <Input placeholder="Input birth year" style={{width: '300px'}} />
        </Form.Item>
        <Form.Item
          name="month"
          rules={[{ required: true }]}
        >
          <Input placeholder="Input birth month" style={{width: '300px'}} />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false}>
          <Link to="/creditCart"> 
        <Button type="primary" htmlType="submit">
          Далее
        </Button>
        </Link>
      </Form.Item>
    </Form>
    </div>
  );
};

export default creditForm;