import React, { useState } from "react";
import "./Footer.css";
import { Drawer, Button, Space } from 'antd';
import { 
  InstagramOutlined, 
  FacebookOutlined, 
  TwitterOutlined, 
  YoutubeOutlined,
  CompassOutlined
} from "@ant-design/icons"; 
 
const Footer = () => { 
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('right');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return ( 
    <div className="first-footer">
      <div className="back">
      <a onClick={() =>  window.scrollTo({top: 0, behavior: 'smooth'})}>BACK TO TOPE</a> 
      </div>
      <div style={{marginLeft: '3%', fontSize: '35px', display: 'flex', justifyContent: 'space-around', marginTop: '5%'}}>
            <a href='https://www.facebook.com/ChelseaFC'> 
              <FacebookOutlined style={{color: 'white'}} /> 
            </a> 
            <a href='https://twitter.com/chelseafc'> 
              <TwitterOutlined style={{color: 'white'}} /> 
            </a>
            <a href='https://www.instagram.com/chelseafc/'> 
              <InstagramOutlined style={{color: 'white'}} /> 
            </a> 
            <a href='https://www.youtube.com/chelseafc'> 
              <YoutubeOutlined style={{color: 'white'}} /> 
            </a>
            <a href='http://t.me/ainekstan_bot' target>
            <CompassOutlined style={{color: 'white'}}/>
            </a>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '3%', marginRight: '3%'}}>
        <Space>
        <Button type="primary" onClick={showDrawer}>Вам позвонить?</Button>
      </Space>
      <Drawer
        title="Оставьте свои данные. Мы с вами в скором времени свяжемся"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'center', marginTop: '40%'}}>
        <input type="text" placeholder='Ваше имя'/>
        <br/>
        <input type="number" placeholder='Телефон'/>
        <br/>
        <input type="text" placeholder='Электронный адрес'/>
        <Space style={{marginTop: '2%'}}>
        <Button style={{backgroundColor: 'green', borderRadius: '10px'}} onClick={onClose}>OK</Button>
        <Button style={{backgroundColor: 'red', borderRadius: '10px'}} onClick={onClose}>Закрыть</Button>
        </Space>
        </div>
      </Drawer>
        </div>
        </div>
  ); 
}; 
 
export default Footer;