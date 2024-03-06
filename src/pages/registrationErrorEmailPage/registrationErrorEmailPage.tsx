import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React from 'react';

import styles from './registrationErrorEmailPage.module.scss'
import PATHS from '../../routes/paths';
import { redirectTo } from '../../routes/routes';

const redirectToAuthReg = () => {
  redirectTo(PATHS.authRegistration);
}
export const RegistrationErrorEmailPage: React.FC = () => {
  return (
    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <CloseCircleFilled style={{ fontSize: 80, color: "var(--character-light-error)" }} />
          <div className={styles.description}>
            <span className={styles.text}>Данные не сохранились</span>
            <span className={styles.subtext}>Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.</span>
          </div>
          <Button
            data-test-id='registration-back-button'
            onClick={redirectToAuthReg}
            style={{ width: '100%' }}
            type='primary'
            size='large'>
            Назад к регистрации
          </Button>
        </div>
      </Card>
    </div>
  );
};
