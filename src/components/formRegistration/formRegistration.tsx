import { Button, Card, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';

import styles from './formRegistration.module.scss'
import { GooglePlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { getGoogleToken, registration } from '../../api/authApi';

type ButtonSettings = {
  type: "link" | "primary" | "text" | "ghost" | "default" | "dashed" | undefined;
  disabled: boolean;
}

const FormRegistration: React.FC = () => {

  function validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const initButtonSettings: ButtonSettings = { type: undefined, disabled: true }
  const [buttonType, setButtonType] = useState(initButtonSettings);
  const [form] = Form.useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleRegistration = () => {
    dispatch(registration(email, password));
  };

  const validatePasswords = ({ getFieldValue }: any) => ({
    validator(rule: any, value: string) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('Пароли не совпадают'));
    },
  });

  useEffect(() => {
    const isFormReady = form.isFieldsTouched(true);
    const isEmailValid = validateEmail(email);

    if (isFormReady && isEmailValid && password === passwordConfirm) {
      setButtonType({ type: 'primary', disabled: false });
    } else {
      setButtonType({ type: undefined, disabled: true });
    }
  }, [form, email, password, passwordConfirm]);

  return (
    <Card bordered={false}  >
      <Form
        form={form}
        className={styles.form}
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        size="large"
        onFinish={handleRegistration}
      >
        <Form.Item className={styles.input_form}
          name="email"
          rules={[
            { type: 'email', message: '' },
            { required: true, message: '' },
          ]}
        >
          <Input
            data-test-id='registration-email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            addonBefore="e-mail"
            style={{ width: '100%' }}
          />
        </Form.Item>

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
            data-test-id='registration-password'
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
            data-test-id='registration-confirm-password'

            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}

            placeholder='Повторите пароль' />
        </Form.Item>
        <div className={styles.buttons_container}>
          <Form.Item>
            <Button
              data-test-id='registration-submit-button'
              htmlType="submit"
              type={buttonType.type}
              disabled={buttonType.disabled}
              style={{ width: "100%" }}
            >
              Войти
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              onClick={getGoogleToken}
              icon={<GooglePlusOutlined />}
              style={{ width: "100%" }}>
              Войти через Google
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card >
  );
};
export default FormRegistration