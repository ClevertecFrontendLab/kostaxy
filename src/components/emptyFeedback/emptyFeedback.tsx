import React from 'react';

import { Button, Card } from 'antd';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { showFeedbackFormModal } from '@redux/modalSlice';

import styles from './emptyFeedback.module.scss';

const EmptyFeedback = () => {

  const dispatch = useDispatch<AppDispatch>();
  const handleCreateFeedback = () => {
    dispatch(showFeedbackFormModal());
  }

  return (
    <div className={styles.empty_container}>
      <Card bodyStyle={{ padding: "0" }}>
        <div className={styles.text}>Оставьте свой отзыв первым</div>
        <div className={styles.subtext}>
          Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.<br />
          Поделитесь своим мнением и опытом с другими пользователями,<br />
          и помогите им сделать правильный выбор.
        </div>
      </Card>
      <Button
        onClick={handleCreateFeedback}
        type='primary'
        size='large'
        data-test-id='write-review'>
        Написать отзыв
      </Button>
    </div>

  );
};

export default EmptyFeedback