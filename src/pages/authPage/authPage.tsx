import FormAuthorization from '@components/formAuthorization/formAuthorization';
import { Card, Tabs, TabsProps } from 'antd';
import React from 'react';

import Logo from '@components/logo/logo';

const AuthPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Вход',
      children: <FormAuthorization />,
      className: "auth-tab"
    },
    {
      key: '2',
      label: 'Регистрация',
      children: 'Форма регистрации',
      className: "auth-tab"
    },
  ];

  return (
    <div className='auth-bg'>
      <Card className='auth-card-container'>
        <div className='auth-card'>
          <Logo logoWidth={309} />
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} centered={true} />
        </div>
      </Card>
    </div>
  );
};
export default AuthPage