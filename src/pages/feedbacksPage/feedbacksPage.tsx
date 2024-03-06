import React, { useEffect, useState } from 'react';

import { Button, Layout } from 'antd';
import { useResizeChecker } from '@hooks/resizeChecker';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';

import styles from './feedbacksPage.module.scss'
import { FeedbackPost } from '@redux/feedbacksSlice';
import { getFeedbacksPosts } from '../../api/feedbacksApi';
import { showFeedbackFormModal } from '@redux/modalSlice';
import { EmptyFeedback } from '@components/emptyFeedback/emptyFeedback';
import { postsSelect } from '@redux/selectors';
import { FeedbackCard } from '@components/feedbackCard/feedbackCard';
import { HeaderBreadcrumbs } from '@components/mainHeaderContent/pageHeaderContent';
import { CreateFeedbackModal } from '@components/modals/feedback/createFeedbackModal/createFeedbackModal';
import { FailAddFeedbackModal } from '@components/modals/feedback/failAddFeedbackModal/failAddFeedbackModal';
import { FailLoadFeedbackModal } from '@components/modals/feedback/failLoadFeedbackModal/failLoadFeedbackModal';
import { SuccessFeedbackModal } from '@components/modals/feedback/successFeedbackModal/successFeedbackModal';
import { MySider } from '@components/sider/sider';

const getShortFeedbacks = (posts: any) => {
  return [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).filter((_, ind) => ind < 4)
}

export const FeedbacksPage: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFeedbacksPosts());
  }, [])

  const posts = useSelector(postsSelect)

  const shortFeedbackPosts = getShortFeedbacks(posts)
  const [isHiddenFeedbacks, setIsHiddenFeedbacks] = useState(true);
  const [postToDisplay, setPostToDisplay] = useState(shortFeedbackPosts);

  const showModal = () => {
    dispatch(showFeedbackFormModal());
  };

  const { testId } = useResizeChecker();

  useEffect(() => {
    setPostToDisplay(
      () =>
        isHiddenFeedbacks
          ? getShortFeedbacks(posts)
          : posts
    );
  }, [isHiddenFeedbacks, posts]);

  return (
    <Layout className="site-layout">

      <CreateFeedbackModal />
      <FailLoadFeedbackModal />
      <FailAddFeedbackModal />
      <SuccessFeedbackModal />

      <MySider testId={testId} isCollapsed={true} />
      <Layout className='content-layout'>
        <HeaderBreadcrumbs />
        {
          postToDisplay.length
            ?
            <div>
              <div className={styles.container}>
                {
                  postToDisplay.map((post: FeedbackPost) => <FeedbackCard key={post.id} post={post} />)
                }
              </div>
              <div className={styles.footer}>
                <Button
                  type='primary'
                  onClick={showModal}
                  data-test-id='write-review'>
                  Написать отзыв
                </Button>
                <Button
                  type='link'
                  onClick={() => setIsHiddenFeedbacks((prev) => !prev)}
                  data-test-id='all-reviews-button'>
                  {isHiddenFeedbacks ? 'Развернуть все отзывы' : 'Свернуть все отзывы'}
                </Button>
              </div>
            </div>
            : <EmptyFeedback />
        }

      </Layout>
    </Layout>

  );
};

