import { Button, Card } from 'antd';
import React from 'react';

import styles from './serverErrorPage.module.scss'
import ErrorServerIcon from '@components/errorServerIcon';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { changePassword } from '../../api/authApi';
import { emailSelect } from '@redux/selectors';

const ServerErrorPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector(emailSelect)
  const handleReset = () => {
    dispatch(changePassword(email));
  }
  return (
    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <ErrorServerIcon />
          <div className={styles.description}>
            <span className={styles.text}>Что-то пошло не так</span>
            <span className={styles.subtext}>Произошла ошибка, попробуйте отправить форму ещё раз.</span>
          </div>
          <Button
            data-test-id='check-back-button'
            onClick={handleReset}
            type='primary'
            size='large'>Назад</Button>
        </div>
      </Card>
    </div>
  );
};
export default ServerErrorPage;
