import React from 'react';
import "./News.css"
import { Card } from "antd";
import { Link } from 'react-router-dom';

const { Meta } = Card;
const WindowHome = () => {
    return (
            <div>
            <h2 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>Выберите окно</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link to='/window_home_2'>
            <Card
              hoverable
              style={{ width: 120, marginTop: '2%', background: 'transparent', border: 'none' }}
              cover={<img src='http://grandplast.kg/assets/components/widgets/calc/img/strokes.1.png' alt='' style={{width: '100px', height: '200px', marginLeft: '8%'}} />}
            >
              <Meta style={{display: 'flex', justifyContent: 'center'}} title={<h1 style={{color: '#fff'}}>1</h1>}/>
            </Card>
            </Link>
            
            <Link to='/window_home_1'>
            <Card
              hoverable
              style={{ width: 220, height: 300, marginTop: '2%', background: 'transparent', border: 'none' }}
              cover={<img src='http://grandplast.kg/assets/components/widgets/calc/img/strokes.2.png' alt='' style={{width: '200px', height: '200px', marginLeft: '5%'}} />}
            >
              <Meta style={{display: 'flex', justifyContent: 'center'}} title={<h1 style={{color: '#fff'}}>2</h1>}/>
            </Card>
            </Link>

            <Link to='/window_home_3'>
            <Card
              hoverable
              style={{ width: 320, height: 300, marginTop: '2%', background: 'transparent', border: 'none' }}
              cover={<img src='http://grandplast.kg/assets/components/widgets/calc/img/strokes.3.png' alt='' style={{width: '300px', height: '200px', marginLeft: '3.3%'}} />}
            >
              <Meta style={{display: 'flex', justifyContent: 'center'}} title={<h1 style={{color: '#fff'}}>3</h1>}/>
            </Card>
            </Link>
        </div>
        </div>
    );
};

export default WindowHome;