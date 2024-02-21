import { GoogleOutlined, GooglePlusOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, Tabs, TabsProps } from 'antd';
import React from 'react';

const FormAuthorization: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card bordered={false} >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input addonBefore="e-mail" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='Пароль' />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Запомнить меня</Checkbox>
          <Button type='link'>Забыли пароль?</Button>
        </Form.Item>

        <Form.Item>
          <Button type="primary" style={{ width: "100%" }}>
            Войти
          </Button>
        </Form.Item>

        <Form.Item>
          <Button icon={<GooglePlusOutlined />} style={{ width: "100%" }}>
            Войти через Google
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default FormAuthorization