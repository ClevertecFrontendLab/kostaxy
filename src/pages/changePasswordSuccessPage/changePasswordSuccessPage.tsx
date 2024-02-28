import { CheckCircleFilled, CloseCircleFilled, WarningFilled } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React from 'react';

import styles from './changePasswordSuccessPage.module.scss'
import { redirectTo } from '../../routes/routes';
import PATHS from '../../routes/paths';

const redirectToAuth = () => {
  redirectTo(PATHS.auth);
}

const ChangePasswordSuccessPage: React.FC = () => {
  return (
    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <CheckCircleFilled style={{ fontSize: 80, color: "var(--character-light-success)" }} />
          <div className={styles.description}>
            <span className={styles.text}>Пароль успешно изменен</span>
            <span className={styles.subtext}>Теперь можно войти в аккаунт, используя<br />свой логин и новый пароль</span>
          </div>
          <Button
            data-test-id='change-entry-button'
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
export default ChangePasswordSuccessPage;
