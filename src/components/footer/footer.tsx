import React from 'react';

import {
  AndroidFilled,
  AppleFilled,
} from '@ant-design/icons';
import { Button, Card } from 'antd';


import Meta from 'antd/lib/card/Meta';
import { Footer as AntdFooter } from 'antd/lib/layout/layout';

const footerActions = [
  <Button type="text" icon={<AndroidFilled />}>Android OS</Button>,
  <Button type="text" icon={<AppleFilled />}>Apple iOS</Button>
]

const Footer: React.FC = () => (
  <AntdFooter >
    <Button type='link'>Смотреть отзывы</Button>
    <Card className='footer-card'
      actions={footerActions}
    >
      <Meta
        title="Скачать на телефон"
        description="Доступно в PRO-тарифе"
      />
    </Card>
  </AntdFooter>
);


export default Footer