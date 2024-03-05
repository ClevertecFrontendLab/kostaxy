import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React from 'react';

import styles from './registrationErrorPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { registration } from '../../api/authApi';


const RegistrationErrorPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector((state: any) => state.auth.email)
  const password = useSelector((state: any) => state.auth.password)
  const handleRegistration = () => {
    dispatch(registration(email, password));
  }

  return (
    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <CloseCircleFilled style={{ fontSize: 80, color: "var(--character-light-error)" }} />
          <div className={styles.description}>
            <span className={styles.text}>Данные не сохранились</span>
            <span className={styles.subtext}>Что-то пошло не так и ваша регистрация<br />не завершилась. Попробуйте ещё раз.</span>
          </div>
          <Button
            data-test-id='registration-retry-button'
            onClick={handleRegistration}
            style={{ width: '100%' }}
            type='primary'
            size='large'>
            Повторить
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default RegistrationErrorPage;
