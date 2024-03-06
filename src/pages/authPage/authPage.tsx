import React from 'react';
import { Card, Tabs, TabsProps } from 'antd';

import styles from './authPage.module.scss';

import PATHS from '../../routes/paths';
import { redirectTo } from '../../routes/routes';
import { FormAuthorization } from '@components/formAuthorization/formAuthorization';
import { Logo } from '@components/logo/logo';

export const AuthPage: React.FC = () => {

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Вход',
      children: <FormAuthorization />,
      className: 'auth-tab',
    },
    {
      key: '2',
      label: 'Регистрация',
      className: 'auth-tab'
    },
  ];

  return (
    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <Logo logoWidth={309} />
          <Tabs onChange={() => redirectTo(PATHS.authRegistration)} defaultActiveKey='1' items={items} centered={true} />
        </div>
      </Card>
    </div>
  );
};

