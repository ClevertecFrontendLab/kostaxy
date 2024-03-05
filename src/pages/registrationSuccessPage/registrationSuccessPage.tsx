import { CheckCircleFilled } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React from 'react';

import styles from './registrationSuccessPage.module.scss'
import { redirectTo } from '../../routes/routes';
import PATHS from '../../routes/paths';

const redirectToAuth = () => {
  redirectTo(PATHS.auth);
}

const RegistrationSuccessPage: React.FC = () => {
  return (
    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <CheckCircleFilled style={{ fontSize: 80, color: "var(--character-light-success)" }} />
          <div className={styles.description}>
            <span className={styles.text}>Регистрация успешна</span>
            <span className={styles.subtext}>Регистрация прошла успешно. Зайдите<br />в приложение, используя свои e-mail и пароль.</span>
          </div>
          <Button
            data-test-id='registration-enter-button'
            onClick={redirectToAuth}
            style={{ width: '100%' }}
            type='primary'
            size='large'
          >Войти</Button>
        </div>
      </Card>
    </div>
  );
};
export default RegistrationSuccessPage;
