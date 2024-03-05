import React from 'react';

import { Button, Form, Input, Modal, Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';

import { StarFilled, StarOutlined } from '@ant-design/icons';
import { hideFeedbackFormModal } from '@redux/modalSlice';
import { createFeedbackPost } from '../../../../api/feedbacksApi';

import styles from './createFeedbackModal.module.scss'
import { isShowFeedbackFormSelect } from '@redux/selectors';

const CreateFeedbackModal: React.FC = React.memo(() => {

  const dispatch = useDispatch<AppDispatch>();

  const isOpen = useSelector(isShowFeedbackFormSelect)

  const [form] = Form.useForm();

  const handleOk = () => {

    form
      .validateFields()
      .then(({ rating, feedback }) => {
        handleCancel();
        dispatch(createFeedbackPost(rating, feedback))
      })

  };

  const handleCancel = () => {
    dispatch(hideFeedbackFormModal())
  };

  const { TextArea } = Input;
  return (
    <Modal
      title="Ваш отзыв"
      open={isOpen}
      onCancel={handleCancel}
      centered
      className={styles.modal}
      footer={[
        <Button
          style={{ height: 40 }}
          key="submit"
          type="primary"
          onClick={handleOk}
          data-test-id='new-review-submit-button'>
          Опубликовать
        </Button>
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        className={styles.form}
      >
        <Form.Item
          name="rating"
          rules={[{ required: true, message: 'Поставьте оценку' }]}
        >
          <Rate
            character={({ value, index }) =>
              value && index! < value
                ? <StarFilled style={{ color: 'var(--character-light-warning)' }} />
                : <StarOutlined style={{ color: 'var(--character-light-warning)' }} />}
            allowHalf={false}
          />
        </Form.Item>
        <Form.Item
          name="feedback"
        >
          <TextArea
            placeholder="Расскажите, почему Вам понравилось наше приложение"
            style={{ minHeight: "46px" }}
            autoSize={true}
          />
        </Form.Item>
      </Form>
    </Modal>

  );
});

export default CreateFeedbackModal
