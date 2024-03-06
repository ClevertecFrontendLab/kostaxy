import { Button, Card } from 'antd';
import React from 'react';

import styles from './authErrorPage.module.scss'
import { WarningFilled } from '@ant-design/icons';
import { redirectTo } from '../../routes/routes';
import PATHS from '../../routes/paths';

export const AuthErrorPage: React.FC = () => {
  return (

    < div className={styles.background} >
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <WarningFilled style={{ fontSize: 80, color: "var(--character-light-warning)" }} />
          <div className={styles.description}>
            <span className={styles.text}>Вход не выполнен</span>
            <span className={styles.subtext}>Что-то пошло не так. Попробуйте еще раз</span>
          </div>
          <Button
            data-test-id='login-retry-button'
            onClick={() => redirectTo(PATHS.auth)}
            style={{ width: '100%' }}
            type='primary' size='large'
          >
            Повторить
          </Button>
        </div>
      </Card>
    </div >
  );
};
