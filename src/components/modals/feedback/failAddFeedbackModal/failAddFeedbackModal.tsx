import React from 'react';

import { Button, Modal, } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';

import { CloseCircleFilled } from '@ant-design/icons';
import { hideFeedbackFailedAddModal, showFeedbackFormModal } from '@redux/modalSlice';

import styles from './failAddFeedbackModal.module.scss';

const SuccessFeedbackModal: React.FC = React.memo(() => {

  const dispatch = useDispatch<AppDispatch>();

  const isOpen = useSelector((state: any) => state.modal.isShowFeedbackAddFailed)


  const handleOk = () => {
    dispatch(showFeedbackFormModal());
    handleCancel()
  };

  const handleCancel = () => {
    dispatch(hideFeedbackFailedAddModal())
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
        <CloseCircleFilled style={{ fontSize: 80, color: "var(--character-light-error)" }} />
        <div>
          <div className={styles.text}>Данные не сохранились</div>
          <div className={styles.sub_text}>Что-то пошло не так. Попробуйте ещё раз.</div>
        </div>
        <div className={styles.button_container}>
          <Button
            onClick={handleOk}
            size="large"
            type='primary'
            data-test-id='write-review-not-saved-modal'
          >
            Написать отзыв
          </Button>
          <Button onClick={handleCancel} size="large">Закрыть</Button>
        </div>
      </div>
    </Modal>

  );
});

export default SuccessFeedbackModal
