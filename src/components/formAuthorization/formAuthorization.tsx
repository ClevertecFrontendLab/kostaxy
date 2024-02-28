import { Button, Card, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';

import styles from './formAuthorization.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { GooglePlusOutlined } from '@ant-design/icons';
import { loginSuccess } from '@redux/authSlice';
import { changePassword, login } from '../../api/authApi';
import { AppDispatch } from '@redux/configure-store';
import { useForm } from 'antd/lib/form/Form';

const FormAuthorization: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const onFinish = (values: any) => {
    dispatch(login(email, password, values.remember));
  };
  const handleReset = () => {
    if (email.length > 0) {
      dispatch(changePassword(email));
    }
  };

  return (
    <Card bordered={false} className={styles.form_container}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        size="large"
        onFinish={onFinish}
      >
        <Form.Item className={styles.input_form}

          name="email"
          rules={[
            { type: 'email', message: '' },
            { required: true, message: '' },
          ]}
        >
          <Input
            data-test-id='login-email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            addonBefore="e-mail"
            style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item className={styles.input_form}
          name="password"
          rules={[
            {
              required: true,
              message: ''
            },
            {
              min: 8,
              message: ''
            },
            {
              pattern: /[A-Z]/,
              message: ''
            },
            {
              pattern: /[0-9]/,
              message: ''
            },
          ]}
        >
          <Input.Password

            data-test-id='login-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Пароль'

          />
        </Form.Item>
        <div className={styles.remember_container}>
          <Form.Item

            name="remember"
            valuePropName="checked">
            <Checkbox
              data-test-id='login-remember'
            >
              Запомнить меня
            </Checkbox>
          </Form.Item>
          <Button
            data-test-id='login-forgot-button'
            onClick={handleReset}
            type='link'
          >Забыли пароль?</Button>
        </div>
        <div className={styles.buttons_container}>
          <Form.Item>
            <Button
              data-test-id='login-submit-button'
              htmlType="submit"
              type="primary" style={{ width: "100%" }}>
              Войти
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              icon={<GooglePlusOutlined />} style={{ width: "100%" }}>
              Войти через Google
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
};
export default FormAuthorization