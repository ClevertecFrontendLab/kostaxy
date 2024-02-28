import { CloseCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';

import styles from './resetPasswordPage.module.scss'
import VerificationInput from 'react-verification-input';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordCodeConfirm } from '../../api/authApi';
import { AppDispatch } from '@redux/configure-store';


const ResetPasswordPage: React.FC = () => {
  const [code, setCode] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector((state: any) => state.auth.email)
  const resetPasswordError = useSelector((state: any) => state.auth.resetPasswordError)

  const handleComplete = (value: string) => {
    setCode(value);
    dispatch(changePasswordCodeConfirm(email, code));
  };
  const handleCodeChange = (code: string) => {
    setCode(code);
  };

  useEffect(() => {
    setCode('')
  }, [resetPasswordError])


  return (
    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          {resetPasswordError
            ? <CloseCircleFilled style={{ fontSize: 80, color: "var(--character-light-error)" }} />
            : <ExclamationCircleFilled style={{ fontSize: 80, color: "var(--primary-light-6)" }} />
          }
          <div className={styles.description}>
            <span className={styles.text}>Введите код <br />для восстановления аккауанта</span>
            <span className={styles.subtext}>Мы отправили вам на e-mail <strong>{email}</strong><br /> шестизначный код. Введите его в поле ниже.</span>
          </div>
          <div className={!resetPasswordError ? styles.verification_form : styles.verification_form_error}>
            <VerificationInput
              inputProps={{ "data-test-id": 'verification-input' }}
              value={code}
              onChange={handleCodeChange}

              placeholder=''
              length={6}
              validChars="0-9"
              onComplete={handleComplete}
            />
          </div>
          <span className={styles.subtext}>Не пришло письмо? Проверьте папку Спам.</span>
        </div>
      </Card >
    </div >
  );
};
export default ResetPasswordPage;
