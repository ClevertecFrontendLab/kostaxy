import FormAuthorization from '@components/formAuthorization/formAuthorization';
import { Card, Tabs, TabsProps } from 'antd';
import React from 'react';

import styles from './authRegistrationPage.module.scss';

import Logo from '@components/logo/logo';
import FormRegistration from '@components/formRegistration';
import { redirectTo } from '../../routes/routes';
import PATHS from '../../routes/paths';

const AuthRegistrationPage: React.FC = () => {


  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Вход',
      className: 'auth-tab',

    },
    {
      key: '2',
      label: 'Регистрация',
      children: <FormRegistration />,
      className: 'auth-tab'
    },
  ];

  return (
    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <Logo logoWidth={309} />
          <Tabs onChange={() => redirectTo(PATHS.auth)} defaultActiveKey='2' items={items} centered={true} />
        </div>
      </Card>
    </div>
  );
};
export default AuthRegistrationPage;
