import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React from 'react';

import styles from './emailErrorPage.module.scss'
import { redirectTo } from '../../routes/routes';
import PATHS from '../../routes/paths';

const redirectToAuth = () => {
  redirectTo(PATHS.auth);
}

const EmailErrorPage: React.FC = () => {
  return (
    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <CloseCircleFilled style={{ fontSize: 80, color: "var(--character-light-error)" }} />
          <div className={styles.description}>
            <span className={styles.text}>Такой e-mail не зарегистрирован</span>
            <span className={styles.subtext}>Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.</span>
          </div>
          <Button
            data-test-id='check-retry-button'
            onClick={redirectToAuth}
            type='primary'
            size='large'
          >Попробовать снова</Button>
        </div>
      </Card >
    </div >
  );
};
export default EmailErrorPage;
