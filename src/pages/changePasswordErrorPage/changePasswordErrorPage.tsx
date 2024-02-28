import { CloseCircleFilled, WarningFilled } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React from 'react';

import styles from './changePasswordErrorPage.module.scss'
import { redirectTo } from '../../routes/routes';
import PATHS from '../../routes/paths';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { setNewPassword } from '../../api/authApi';



const ChangePasswordErrorPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const password = useSelector((state: any) => state.auth.password)
  const passwordConfirm = useSelector((state: any) => state.auth.passwordConfirm)

  const handleResetPassword = () => {
    dispatch(setNewPassword(password, passwordConfirm));
  }
  return (
    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <CloseCircleFilled style={{ fontSize: 80, color: "var(--character-light-error)" }} />
          <div className={styles.description}>
            <span className={styles.text}>Данные не сохранились</span>
            <span className={styles.subtext}>Что-то пошло не так. Попробуйте ещё раз.</span>
          </div>
          <Button
            data-test-id='change-retry-button'
            onClick={handleResetPassword}
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
export default ChangePasswordErrorPage;
