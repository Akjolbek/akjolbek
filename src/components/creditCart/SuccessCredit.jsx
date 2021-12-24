import React from 'react';
import { Alert } from 'antd';

const SuccessCredit = () => {
    return (
        <div>
           
  <>
    <Alert message="Success" type="success" showIcon />
     
    <Alert
      message="Успешно"
      description="Вы успешно произвели оплату , всего доброго."
      type="success"
      showIcon
    />
  </>
        </div>
    );
};

export default SuccessCredit;