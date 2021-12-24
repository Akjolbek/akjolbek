import React, { useState } from "react";
import "./Home.css";
import { Card, Cascader, Steps, Button, message, Modal } from "antd";
import {Link} from "react-router-dom"
import AOS from 'aos';

AOS.init();
const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];
const options = [
  {
    value: 'zhejiang',
    label: 'Одностворчатое окно 100х70 5 376 сом',
  },
  {
    value: 'zhejiangg',
    label: 'Одностворчатое окно 80х60 5 360 сом',
  },
  {
    value: 'zhejianggg',
    label: 'Одностворчатое окно 80х60 6 272 сом',
  },
  {
    value: 'zhejiangggg',
    label: 'Одностворчатое окно 80х120 8 096 сом',
  },
  {
    value: 'zhejianggggg',
    label: 'Одностворчатое окно 90х90 7 200 сом',
  },
];
const casc = [
  {
    value: 'zhejiang',
    label: 'Двухстворчатое окно 130х150 13 958 сом',
  },
  {
    value: 'zhejiang2',
    label: 'Двухстворчатое окно 120х120 13 273 сом',
  },
  {
    value: 'zhejiang3',
    label: 'Двухстворчатое окно 130х140 15 348 сом',
  },
  {
    value: 'zhejiang4',
    label: 'Двухстворчатое окно 140х140 15 891 сом',
  },
  {
    value: 'zhejiang5',
    label: 'Двухстворчатое окно 150х150 17 266 сом',
  },
];
const cusc = [
  {
    value: 'zhejiang',
    label: 'Трехстворчатое окно 210х150 19 771 сом',
  },
  {
    value: 'zhejiang2',
    label: 'Трехстворчатое окно 220х200 25 143 сом',
  },
  {
    value: 'zhejiang3',
    label: 'Трехстворчатое окно 210х150 19 771 сом',
  },
  {
    value: 'zhejiang4',
    label: 'Трехстворчатое окно 240х150 21 160 сом',
  },
  {
    value: 'zhejiang5',
    label: 'Трехстворчатое окно 250х150 21 643 сом',
  },
];
const { Meta } = Card;
// eslint-disable-next-line no-unused-vars
const contentStyle = {
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  marginTop: '5%'
};
const Home = () => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  function onChange(value) {
    console.log(value);
  }
  return (
    <div className='body'>
      <div className='back-img' style={{marginTop: '3%'}}>
      <h1 style={{marginLeft: '5%'}}>ПЛАСТИКОВЫЕ И АЛЮМИНИЕВЫЕ<br/>ОКНА, ДВЕРИ, ВИТРАЖИ</h1>
      <h1 style={{marginLeft: '5%'}}><b>В подарок! Акустические ручки с<br/>микропроветриванием</b></h1>
      <div style={{display: 'flex'}}>
      <img style={{width: '50px', height: '50px', marginLeft: '5%'}} src='http://grandplast.kg/assets/static/pages/okna/img/icon-wind48.svg' alt=''/>
      <h3 style={{marginLeft: '1%', marginTop: '2.9%'}}>Система проветривания и клапанов<br/>свежий воздух без сквозняков, шума и пыли</h3>
      </div>
      <div style={{display: 'flex'}}>
      <img style={{width: '50px', height: '50px', marginLeft: '5%'}} src='http://grandplast.kg/assets/static/pages/okna/img/icon-star48.svg' alt=''/>
      <h3 style={{marginLeft: '1%', marginTop: '2.9%'}}>Энергосберегающий стеклопакет<br/>удерживает тепло внутри дома, отражает жару</h3>
      </div>
      <div style={{display: 'flex'}}>
      <img style={{width: '50px', height: '50px', marginLeft: '5%'}} src='http://grandplast.kg/assets/static/pages/okna/img/icon-wet.svg' alt=''/>
      <h3 style={{marginLeft: '1%', marginTop: '2.9%'}}>Эко-профили изготовлены из высококачественного<br/>сырья и безопасны для здоровья</h3>
      </div>
      <div style={{display: 'flex'}}>
      <img style={{width: '50px', height: '50px', marginLeft: '5%'}} src='http://grandplast.kg/assets/static/pages/okna/img/icon-hand48.svg' alt=''/>
      <h3 style={{marginLeft: '1%', marginTop: '2.9%'}}>Срок выполнения заказа - от 3-х дней<br/>финансовая гарантия сроков</h3>
      <div style={{marginTop: '-25%', marginLeft: '45%', backgroundColor: '#fff', width: '270px', height: '385px', borderRadius: '10px'}} className='top__block-banner'>
      <div>
        <img style={{width: '240px', marginLeft: '5%', borderRadius: '10px'}} src="http://grandplast.kg/assets/static/pages/okna/img/3767-580x387.jpg" alt="" />
      </div>
      <div className='top__block-banner-title'>
      <i>Дарим 3 подарка</i>
      <br/>
      <span className='orange' style={{fontSize: '24px'}}>при покупке окон</span>
      <ul style={{marginTop: '2%'}}>
          <li>Демонтажная окна</li>
          <li>Москитная сетка</li>
          <li>Клининг</li>
        </ul>
      </div>
      </div>
      </div>
      <div style={{marginLeft: '5%', marginTop: '3%'}}>
      <Button type="danger" onClick={() => setVisible(true)}>Рассчитать стоимость сейчас</Button>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={600}
      >
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <h1>Закажите бесплатный звонок</h1>
        <h2>Перезвоним за 12 минут</h2>
        <h2 style={{marginTop: '-3%'}}>Проверьте нас!</h2>
        <div style={{marginTop: '3%'}}>
        <input type='number' placeholder='например: 0(707) 707-707'></input>
        <button style={{marginLeft: '4%', width: '120px', height: '40px', background: 'transparent', borderColor: 'red', color: 'red', borderRadius: '5%', cursor: 'pointer'}}>Позвоните мне</button>
        </div>
        </div>
      </Modal>
      </div>
      </div>
      <div style={{marginTop: '5%'}}>
        <h1 style={{color: 'white', display: 'flex', justifyContent: 'center', marginTop: '3%'}}>Варианты цен</h1>
        <h2 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>производитель материалов</h2>
        <div className='count' style={{display: 'flex', justifyContent: 'space-around', marginTop: '3%'}}>
        <div>
          <img style={{width: '60px', height: '60px'}} src="http://grandplast.kg/assets/static/pages/al/img/kz.svg" alt="" />
          <h2>КАЗАКСТАН</h2>
          <h2>от $45/м²</h2>
        </div>
        <div>
          <img style={{width: '60px', height: '60px'}} src="http://grandplast.kg/assets/static/pages/al/img/ru.svg" alt="" />
          <h2>РОССИЯ</h2>
          <h2>от $50/м²</h2>
        </div>
        <div>
          <img style={{width: '60px', height: '60px'}} src="http://grandplast.kg/assets/static/pages/al/img/tr.svg" alt="" />
          <h2>ТУРЦИЯ</h2>
          <h2>от $55/м²</h2>
        </div>
        <div>
          <img style={{width: '60px', height: '60px'}} src="http://grandplast.kg/assets/static/pages/al/img/de.svg" alt="" />
          <h2>ГЕРМАНИЯ</h2>
          <h2>от $75/м²</h2>
        </div>
        </div>
      </div>
      <div style={{marginTop: '3%'}}>
      <h1 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>Цены на окна ПВХ</h1>
      <Steps current={current} style={{width: '800px', marginLeft: '25%'}}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content" style={{display: 'flex', justifyContent: 'space-around', marginTop: '1%'}}>
        <div>
        <img style={{width: '200px', height: '200px'}} src='http://grandplast.kg/assets/static/pages/site/okna/img/001.svg' alt='' />
        <p style={{color: 'white'}}>Выберите размер окна</p>
        <Cascader style={{width: '300px'}} options={options} onChange={onChange} placeholder="Please select" />
        <p style={{color: 'white'}}>поворотно-откидная створка</p>
        <Button type="primary" onClick={showModal}>
        Рассчитать своё окно
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h1>Заказать одностворчатое окно</h1>
        <input type='number' placeholder='например: 0(707) 707-707'></input>
        <button style={{marginLeft: '4%', width: '120px', height: '40px', background: 'transparent', borderColor: 'red', color: 'red', borderRadius: '5%'}}>Позвоните мне</button>
      </Modal>
        </div>
        <div>
        <img style={{width: '200px', height: '200px'}} src='http://grandplast.kg/assets/static/pages/site/okna/img/002.svg' alt='' />
        <p style={{color: 'white'}}>Выберите размер окна</p>
        <Cascader style={{width: '320px'}} options={casc} onChange={onChange} placeholder="Please select" />
        <p style={{color: 'white'}}>поворотно-откидная, поворотная, глухая створки</p>
        <Button type="primary" onClick={showModal}>
        Рассчитать своё окно
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h1>Заказать двухстворчатое окно</h1>
        <input type='number' placeholder='например: 0(707) 707-707'></input>
        <button style={{marginLeft: '4%', width: '120px', height: '40px', background: 'transparent', borderColor: 'red', color: 'red', borderRadius: '5%'}}>Позвоните мне</button>
      </Modal>
        </div>
        <div>
        <img style={{width: '300px', height: '200px'}} src='http://grandplast.kg/assets/static/pages/site/okna/img/003.svg' alt='' />
        <p style={{color: 'white'}}>Выберите размер окна</p>
        <Cascader style={{width: '320px'}} options={cusc} onChange={onChange} placeholder="Please select" />
        <p style={{color: 'white'}}>поворотно-откидная, поворотная, глухая створки</p>
        <Button type="primary" onClick={showModal}>
        Рассчитать своё окно
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h1>Заказать трехстворчатое окно</h1>
        <input type='number' placeholder='например: 0(707) 707-707'></input>
        <button style={{marginLeft: '4%', width: '120px', height: '40px', background: 'transparent', borderColor: 'red', color: 'red', borderRadius: '5%'}}>Позвоните мне</button>
      </Modal>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '1%'}} className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
      </div>
      <div style={{display: "flex", justifyContent: 'center', marginTop: '3%'}}>
          <h1 style={{color: 'white'}}>Выберите — куда вам нужны окна</h1>
        </div>
      <div className="news" style={{display: 'flex', justifyContent: 'center', marginTop: '1%'}}>
      <Link to='/window_home'>
      <Card
              hoverable
              style={{ width: 440, marginLeft: '2%', border: 'none', backgroundColor: 'transparent' }}
              
              cover={<img src='https://p4.wallpaperbetter.com/wallpaper/1011/101/300/apartment-condo-design-home-wallpaper-preview.jpg' alt='' style={{width: '400px', height: '250px', marginLeft: '4%'}} />}
            >
              <Meta style={{}} title={<h1 style={{color: 'white', textAlign: 'center'}}>Квартира</h1>}/>
      </Card>
      </Link>

      <Link to='/window_home'>
      <Card
              hoverable
              style={{ width: 440, marginLeft: '3%', border: 'none', backgroundColor: 'transparent' }}
              cover={<img src='https://www.rabstol.net/uploads/gallery/main/145/rabstol_net_house_23.jpg' alt='' style={{width: '400px', height: '250px', marginLeft: '4%'}} />}
            >
              <Meta style={{}} title={<h1 style={{color: 'white', textAlign: 'center'}}>Частный дом</h1>}/>
      </Card>
      </Link>

      <Link to='/window_home'>
      <Card
              hoverable
              style={{ width: 440, marginLeft: '4%', border: 'none', backgroundColor: 'transparent' }}
              cover={<img src='https://qapper.ru/wp-content/uploads/2015/02/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%BE%D1%84%D0%B8%D1%81.jpg' alt='' style={{width: '400px', height: '250px', marginLeft: '4%'}} />}
            >
              <Meta style={{}} title={<h1 style={{color: 'white', textAlign: 'center'}}>Офис</h1>}/>
      </Card>
      </Link>
      </div>
      <div class="row" style={{ marginTop: '3%', backgroundColor: '#c4cdd6', display: 'flex', justifyContent: 'center'}}>
    <div style={{marginLeft: '8%', marginTop: '2.5%'}}>
      <h1><b>Возле окна всегда хорошо!</b></h1>
      <h3>Температура даже у самого окна с простым двойным стеклом остается на комфортном уровне, например, зимой она выше на 5—7°С по сравнению с обычными <br/> пластиковыми окнами. <p/> С окнами от Ainekstan.kg ни зимние заморозки, ни жаркое лето не доставят хлопот ни вашим домочадцам, <br/> ни вашим любимым цветам!</h3>
      <div style={{marginLeft: '', marginTop: '5%'}}>
      <Button style={{width: '250px', height: '50px'}} type="danger" onClick={() => setVisible(true)}>Рассчитать стоимость сейчас</Button>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={600}
      >
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <h1>Закажите бесплатный звонок</h1>
        <h2>Перезвоним за 12 минут</h2>
        <h2 style={{marginTop: '-3%'}}>Проверьте нас!</h2>
        <div style={{marginTop: '3%'}}>
        <input type='number' placeholder='например: 0(707) 707-707'></input>
        <button style={{marginLeft: '4%', width: '120px', height: '40px', background: 'transparent', borderColor: 'red', color: 'red', borderRadius: '5%', cursor: 'pointer'}}>Позвоните мне</button>
        </div>
        </div>
      </Modal>
      </div>
    </div>
    <div>
    <img style={{marginLeft: '15%', height: '500px', marginTop: '0%'}} src='http://grandplast.kg/assets/static/pages/site/okna/img/win-fix.jpg' alt='' />
    </div>
  </div>
  <div style={{display: 'flex', justifyContent: 'space-around'}}>
  <div className='auto' style={{marginTop: '5%'}}>
    <h1>Автоматическая сборка</h1>
    <h2 style={{color: 'white', marginTop: '-5%'}}>Ваши окна собраны точно и без ошибок</h2>
    <br/>
    <h1>Предоставим все документы на окна</h1>
    <h2 style={{color: 'white', marginTop: '-5%'}}>Сертификаты качества, чеки и гарантийные талоны</h2>
    <br/>
    <h1>Демонтаж старых окон</h1>
    <h2 style={{color: 'white', marginTop: '-5%'}}>мы сделаем бесплатно!</h2>
  </div>
  <div>
  <h1 style={{color: 'white', marginTop: '50%'}}><b>Мы делаем всё,</b></h1>
  <h1 style={{color: 'white', marginTop: '-5%', marginLeft: '-37%'}}><b>чтобы вам было удобно!</b></h1>
  </div>
  </div>
  <div style={{display: 'flex', justifyContent: 'center', marginLeft: '52%', marginTop: '-3%'}}>
  <Button type="danger" onClick={() => setVisible(true)}>Перезвоните мне</Button>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={600}
      >
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <h1>Закажите бесплатный звонок</h1>
        <h2>Перезвоним за 12 минут</h2>
        <h2 style={{marginTop: '-3%'}}>Проверьте нас!</h2>
        <div style={{marginTop: '3%'}}>
        <input type='number' placeholder='например: 0(707) 707-707'></input>
        <button style={{marginLeft: '4%', width: '120px', height: '40px', background: 'transparent', borderColor: 'red', color: 'red', borderRadius: '5%', cursor: 'pointer'}}>Позвоните мне</button>
        </div>
        </div>
      </Modal>
      </div>
      <div style={{marginTop: '6%'}}>
        <h1 style={{fontSize: '50px', display: 'flex', justifyContent: 'center', color: 'white', marginLeft: '-24%'}}><b>За 11 лет мы установили</b></h1>
        <h1 style={{fontSize: '50px', display: 'flex', justifyContent: 'center', color: 'white', marginTop: '-3.5%'}}><b>более 7 000 пластиковых окон и дверей</b></h1>
        <h1 style={{display: 'flex', justifyContent: 'center', color: 'white', marginTop: '-2%'}}>7 тысяч окон = один микрорайон Бишкека, в среднем по 3 окна в день</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '5%'}}>
      <div>
        <h1 style={{fontSize: '60px', color: 'white'}}><b>1 450</b></h1>
        <h3 style={{color: 'white', marginTop: '-3%'}}><b>Человек стали нашими<br/>клиентами в 2019 году</b></h3>
      </div>
      <div>
        <h1 style={{fontSize: '60px', color: 'white'}}><b>1 500</b></h1>
        <h3 style={{color: 'white', marginTop: '-3%'}}><b>Клиентов<br/>за 11 лет работы</b></h3>
      </div>
      <div>
        <h1 style={{fontSize: '60px', color: 'white'}}><b>95%</b></h1>
        <h3 style={{color: 'white', marginTop: '-3%'}}><b>Клиентов готовы<br/>нас рекомендовать</b></h3>
      </div>
      </div>
      <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '6%' , color: "white"}}>Цветной ламинированный профиль</h1>
      <h2 style={{display: 'flex', textAlign: 'center', justifyContent: 'center', marginTop: '' , color: "white"}}>Пластиковое окно — только белое? Не правда! <br/>
      Пластиковое окно может быть любого цвета — от цветов различных пород дерева, до жизнерадостного желтого. <br/>
      Ламинация под дуб или орех сделает его практически неотличимым от деревянных окон!</h2>
      <div className="cards">
        <Card hoverable style={{ width: 320, background: "rgba(0, 0, 0, 0.514)", border: 'none' }} cover={<img alt="example" src="http://grandplast.kg/images/colors/antracit.jpg"/>}>
        <Meta title={<a><h2 style={{color: 'white', display: 'flex'}}>Антрацид</h2></a>} />
        </Card>
        <Card hoverable style={{ width: 320, background: 'rgba(0, 0, 0, 0.514)', border: 'none' }} cover={<img alt="example" src="http://grandplast.kg/images/colors/mor-dub.jpg"/>}>
          <Meta title={<a><h2 style={{color: 'white', display: 'flex'}}>Мореный дуб</h2></a>} />
        </Card>
        <Card hoverable style={{ width: 320, background: 'rgba(0, 0, 0, 0.514)', border: 'none' }} cover={<img alt="example" src="http://grandplast.kg/images/colors/platinum.jpg"/>}>
        <Meta title={<a><h2 style={{color: 'white', display: 'flex'}}>Платинум</h2></a>} />
        </Card>
        <Card hoverable style={{ width: 320, background: 'rgba(0, 0, 0, 0.514)', border: 'none' }} cover={<img alt="example" src="http://grandplast.kg/images/colors/z-oreh.jpg"/>}>
        <Meta title={<a><h2 style={{color: 'white', display: 'flex'}}>Орех</h2></a>} />
        </Card>
        </div>
        <div className='card2'>
        <Card hoverable style={{ width: 320, background: 'rgba(0, 0, 0, 0.514)', border: 'none' }} cover={<img alt="example" src="http://grandplast.kg/images/colors/nat_dub.jpg"/>}>
        <Meta title={<a><h2 style={{color: 'white', display: 'flex'}}>Монолит</h2></a>} />
        </Card>
        <Card hoverable style={{ width: 320, background: 'rgba(0, 0, 0, 0.514)', border: 'none' }} cover={<img alt="example" src="http://grandplast.kg/images/colors/mahagon.jpg"/>}>
        <Meta title={<a><h2 style={{color: 'white', display: 'flex'}}>Махагон</h2></a>} />
        </Card>
        <Card hoverable style={{ width: 320, background: 'rgba(0, 0, 0, 0.514)', border: 'none' }} cover={<img alt="example" src="http://grandplast.kg/images/colors/shogun.jpg"/>}>
        <Meta title={<a><h2 style={{color: 'white', display: 'flex'}}>Золотой дуб</h2></a>} />
        </Card>
        <Card hoverable style={{ width: 320, background: 'rgba(0, 0, 0, 0.514)', border: 'none' }} cover={<img alt="example" src="http://grandplast.kg/images/colors/rustik.jpg"/>}>
        <Meta title={<a><h2 style={{color: 'white', display: 'flex'}}>Рустик</h2></a>} />
        </Card>
        </div>
        <div className='card3'>
        <Card hoverable style={{ width: 320, background: 'rgba(0, 0, 0, 0.514)', border: 'none' }} cover={<img alt="example" src="https://euragroup.kg/wp-content/uploads/2019/01/small_01.jpg"/>}>
        <Meta title={<a><h2 style={{color: 'white', display: 'flex'}}>Стандарт</h2></a>} />
        </Card>
        </div>
        <div style={{marginTop: '5%'}}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>
            <h1 style={{fontSize: '80px', color: 'white'}}><b>10</b></h1>
            <h1 style={{color: 'white', marginTop: '-23%', fontSize: '40px'}}><b>причин купить</b></h1>
            <h1 style={{color: 'white', marginTop: '-14%', fontSize: '40px'}}><b>пластиковые окна</b></h1> 
            </div>
            <div>
              <h3 style={{color: 'white'}}>Сегодня уже мало кто сомневается в практичности окон из пластика.<br/>Сложно поспорить и с тем, что они эстетичны, гигиеничны,<br/>универсальны и являются продуктом серьезных инженерных<br/>разработок.<br/>Производители пластиковых окон постоянно совершенствуют<br/>конструкции, добиваясь оптимальных характеристик для разных<br/>условий эксплуатации</h3>
              <h3 style={{color: 'white', marginTop: '5%'}}>Преимущества установки окон ПВХ:</h3>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '3%'}}>
            <div>
              <h1 style={{color: 'red'}}>1.</h1>
              <h3 style={{color: 'white'}}>В квартире станет намного теплее.</h3>
            </div>
            <div>
              <h1 style={{color: 'red'}}>2.</h1>
              <h3 style={{color: 'white'}}>Установка пластиковых окон на 10-50% снизит<br/>размер ваших коммунальных расходов в<br/>отопительный сезон.</h3>
            </div>
            <div>
              <h1 style={{color: 'red'}}>3.</h1>
              <h3 style={{color: 'white'}}>Эксплуатационный ресурс ПВХ-конструкций<br/>намного выше, чем у деревянных окон.</h3>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>
              <h1 style={{color: 'red'}}>4.</h1>
              <h3 style={{color: 'white'}}>Многообразие моделей позволяет<br/>изготовить конструкцию, оптимально<br/>соответствующую каждым конкретным<br/>условиям эксплуатации.</h3>
            </div>
            <div>
              <h1 style={{color: 'red'}}>5.</h1>
              <h3 style={{color: 'white'}}>Сдержанная эстетика классических моделей<br/>обеспечивает их гармоничное вхождение в<br/>любой интерьер и экстерьер. Для большей<br/>органичности профиль окрашивают или<br/>ламинируют.</h3>
            </div>
            <div>
              <h1 style={{color: 'red'}}>6.</h1>
              <h3 style={{color: 'white'}}>Пластик не имеет ограничений в форме,<br/>поэтому вы можете купить окно круглой,<br/>овальной или любой другой конфигурации,<br/>при этом его цена будет значительно уступать<br/>стоимости деревянного аналога.</h3>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>
              <h1 style={{color: 'red'}}>7.</h1>
              <h3 style={{color: 'white'}}>Звукоизолирующие конструкции позволят<br/>забыть об уличном шуме.</h3>
            </div>
            <div>
              <h1 style={{color: 'red'}}>8.</h1>
              <h3 style={{color: 'white'}}>Специальная фурнитура станет надежным<br/>барьером для несанкционированного<br/>проникновения.</h3>
            </div>
            <div>
              <h1 style={{color: 'red'}}>9.</h1>
              <h3 style={{color: 'white'}}>Благодаря использованию микросистем<br/>автоматической подачи воздуха в помещение<br/>пластиковые окна ПВХ не промерзают и не<br/>запотевают.</h3>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div>
              <h1 style={{color: 'red'}}>10.</h1>
              <h3 style={{color: 'white'}}>Изделия требуют минимального ухода, никаких<br/>ежегодных покрасок, утеплений и прочих<br/>трудоёмких мероприятий.</h3>
            </div>
          </div>
        </div>
        </div>
  );
        }

export default Home;