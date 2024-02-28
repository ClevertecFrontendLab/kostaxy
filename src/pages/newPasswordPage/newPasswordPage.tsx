import { Button, Card, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { registration, setNewPassword } from '../../api/authApi';

import styles from './newPasswordPage.module.scss'

const NewPasswordPage: React.FC = () => {



  const [form] = Form.useForm();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useDispatch<AppDispatch>();


  const handleNewPassword = () => {
    dispatch(setNewPassword(password, passwordConfirm));
  };

  const validatePasswords = ({ getFieldValue }: any) => ({
    validator(rule: any, value: string) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('Пароли не совпадают'));
    },
  });

  return (

    <div className={styles.background}>
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <div className={styles.description}>
            <span className={styles.text}>Восстановление аккауанта</span>
          </div>
          <Form
            form={form}
            className={styles.form}
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            size="large"
            onFinish={handleNewPassword}
            style={{
              display: "flex", flexDirection: "column", gap: "32px"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Form.Item className={styles.input_form}
                help="Пароль не менее 8 символов, с заглавной буквой и цифрой"
                name="password"
                rules={[
                  {
                    required: true,
                  },
                  {
                    min: 8,
                  },
                  {
                    pattern: /[A-Z]/,
                  },
                  {
                    pattern: /[0-9]/,
                  },
                ]}
              >
                <Input.Password
                  data-test-id='change-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Пароль'
                />
              </Form.Item>
              <Form.Item className={styles.input_form}
                name="password_confirm"
                rules={[
                  { required: true, message: '' },
                  validatePasswords,
                ]}
              >
                <Input.Password
                  data-test-id='change-confirm-password'

                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}

                  placeholder='Повторите пароль' />
              </Form.Item>
            </div>
            <Form.Item>
              <Button
                data-test-id='change-submit-button'
                htmlType="submit"
                type="primary"
                style={{ width: "100%" }}
              >
                Сохранить
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card >
    </div >
  );
};
export default NewPasswordPage