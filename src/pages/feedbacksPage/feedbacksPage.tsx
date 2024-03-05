import React, { useEffect, useState } from 'react';

import { Button, Layout } from 'antd';
import Sider from '@components/sider';
import { useResizeChecker } from '@hooks/resizeChecker';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import HeaderBreadcrumbs from '@components/mainHeaderContent/pageHeaderContent';

import styles from './feedbacksPage.module.scss'
import FeedbackCard from '@components/feedbackCard/feedbackCard';
import { FeedbackPost } from '@redux/feedbacksSlice';
import { getFeedbacksPosts } from '../../api/feedbacksApi';
import CreateFeedbackModal from '@components/modals/feedback/createFeedbackModal';
import { showFeedbackFormModal } from '@redux/modalSlice';
import FailAddFeedbackModal from '@components/modals/feedback/failAddFeedbackModal';
import SuccessFeedbackModal from '@components/modals/feedback/successFeedbackModal';
import EmptyFeedback from '@components/emptyFeedback';
import FailLoadFeedbackModal from '@components/modals/feedback/failLoadFeedbackModal/failLoadFeedbackModal';

const getShortFeedbacks = (posts: any) => {
  return [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).filter((_, ind) => ind < 4)
}

const FeedbacksPage: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFeedbacksPosts());
  }, [])

  const posts = useSelector((state: any) => state.feedbacks.posts)

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

      <Sider testId={testId} isCollapsed={true} />
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

export default FeedbacksPage
