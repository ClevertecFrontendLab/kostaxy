import React from 'react';

import { Button, Card, Modal, } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import styles from './failLoadFeedbackModal.module.scss';
import { redirectTo } from '../../../../routes/routes';
import PATHS from '../../../..//routes/paths';
import { hideFeedbackLoadErrorModal } from '@redux/modalSlice';
import { AppDispatch } from '@redux/configure-store';
import { isShowFeedbackLoadFailedSelect } from '@redux/selectors';
import { ErrorServerIcon } from '@components/errorServerIcon/errorServerIcon';

export const FailLoadFeedbackModal: React.FC = React.memo(() => {

  const isOpen = useSelector(isShowFeedbackLoadFailedSelect)
  const dispatch = useDispatch<AppDispatch>();

  const handleBack = () => {
    handleCancel()
  };

  const handleCancel = () => {
    dispatch(hideFeedbackLoadErrorModal());
    redirectTo(PATHS.main);
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
      <Card className={styles.сard_сontainer}>
        <div className={styles.сard}>
          <ErrorServerIcon />
          <div className={styles.description}>
            <span className={styles.text}>Что-то пошло не так</span>
            <span className={styles.subtext}>Произошла ошибка, попробуйте ещё раз.</span>
          </div>
          <Button
            data-test-id='check-back-button'
            onClick={handleBack}
            type='primary'
            size='large'>Назад</Button>
        </div>
      </Card>
    </Modal>

  );
});

