import React from 'react';
import "./News.css"
import { Link } from 'react-router-dom';
import { Slider, Button } from "antd";

const WindowHome2 = () => {
    return (
      <div>
      <h1 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>Укажите размеры окна</h1>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '-3%', marginLeft: '-9%'}} className='chelsea'>
      <Slider axis="y" range defaultValue={[1, 1500]} min={0} max={1500} step={1} style={{width: '400px', marginTop: '17%', transform: 'rotate(-90deg)', marginLeft: ''}}/>
      <img src='http://grandplast.kg/assets/components/widgets/calc/img/win1.svg' alt='' style={{width: '400px', height: '500px', marginLeft: '-12%'}} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '-7%'}}>
      <Slider range defaultValue={[1, 2500]} min={0} max={2500} step={1} style={{width: '400px', marginLeft: '4%', marginTop: '5%'}}/>
      </div>
      <div style={{marginTop: '3%', display: 'flex', justifyContent: 'center' }}>
      <Link to='/creditForm'>
      <Button style={{backgroundColor: 'red', border: 'none', color: 'white'}}>Заказать</Button>
      </Link>
      </div>
      </div>
    );
};

export default WindowHome2;