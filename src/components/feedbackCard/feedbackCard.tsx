import React from 'react';

import { Avatar, Card, Rate } from 'antd';


import styles from './feedbackCard.module.scss'
import { StarFilled, StarOutlined, UserOutlined } from '@ant-design/icons';
import { FeedbackPost } from '@redux/feedbacksSlice';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

type Props = { post: FeedbackPost }
export const FeedbackCard = ({ post }: Props) => (
  <Card>
    <div className={styles.card_container}>
      <div className={styles.avatar_container}>
        <Avatar
          src={post.imageSrc ? post.imageSrc : undefined}
          icon={post.imageSrc ? undefined : <UserOutlined style={{ color: '#000' }} />}
          size={42}
        />
        <div className={styles.name}>
          {post?.fullName
            ? post.fullName.split(' ').map((word, index) => (
              <React.Fragment key={index}>
                {word}
                <br />
              </React.Fragment>
            ))
            : ''}
        </div>
      </div>
      <div className={styles.info_container}>
        <div className={styles.rating_container}>
          <Rate
            character={({ value, index }) =>
              value && index! < value
                ? <StarFilled style={{ color: 'var(--character-light-warning)' }} />
                : <StarOutlined style={{ color: 'var(--character-light-warning)' }} />}

            disabled
            defaultValue={post?.rating ? post.rating : 0}
            allowClear={false}
            allowHalf={false} />
          <div className={styles.date}>
            {
              post?.createdAt
                ? formatDate(post.createdAt)
                : ''
            }
          </div>
        </div>
        <div className={styles.feedback}>{post.message}</div>
      </div>
    </div>
  </Card>
);
