import React from 'react';

import { Button, Modal, } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';

import { CheckCircleFilled } from '@ant-design/icons';
import { hideFeedbackSuccessModal } from '@redux/modalSlice';
import { getFeedbacksPosts } from '../../../../api/feedbacksApi';

import styles from './successFeedbackModal.module.scss';
import { isShowFeedbackSuccessSelect } from '@redux/selectors';

export const SuccessFeedbackModal: React.FC = React.memo(() => {

  const dispatch = useDispatch<AppDispatch>();

  const isOpen = useSelector(isShowFeedbackSuccessSelect)


  const handleOk = () => {
    dispatch(getFeedbacksPosts());
    handleCancel()
  };

  const handleCancel = () => {
    dispatch(hideFeedbackSuccessModal())
  };


  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      centered
      footer={null}
      closable={false}
      className={styles.modal}
    >
      <div className={styles.content}>
        <CheckCircleFilled style={{ fontSize: 80, color: "var(--character-light-success)" }} />
        <div className={styles.text}>Отзыв успешно опубликован</div>
        <Button onClick={handleOk} size="large" type='primary' style={{ width: "100%" }}>Отлично</Button>
      </div>
    </Modal>

  );
});

