import React from 'react';

import {
  AndroidFilled,
  AppleFilled,
} from '@ant-design/icons';
import { Button, Card } from 'antd';


import Meta from 'antd/lib/card/Meta';
import { Footer as AntdFooter } from 'antd/lib/layout/layout';
import { useNavigate } from 'react-router-dom';
import PATHS from '../../routes/paths';

const footerActions = [
  <Button type="text" icon={<AndroidFilled />}>Android OS</Button>,
  <Button type="text" icon={<AppleFilled />}>Apple iOS</Button>
]

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const handleFetchFeedbacks = () => {
    navigate(PATHS.feedbacks)
  };

  return (

    <AntdFooter >
      <Button
        onClick={handleFetchFeedbacks}
        type='link'
        data-test-id='see-reviews'
      >
        Смотреть отзывы
      </Button>
      <Card className='footer-card'
        actions={footerActions}
      >
        <Meta
          title="Скачать на телефон"
          description="Доступно в PRO-тарифе"
        />
      </Card>
    </AntdFooter>
  )
};


export default Footer