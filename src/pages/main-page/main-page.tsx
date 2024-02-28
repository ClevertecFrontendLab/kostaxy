import React, { useEffect } from 'react';

import { Layout } from 'antd';
import Footer from '@components/footer'
import Sider from '@components/sider';
import { useResizeChecker } from '@hooks/resizeChecker';
import PageHeader from '@components/pageHeader/pageHeader';
import MainContent from '@components/mainContent/сontent';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { hideLoader } from '@redux/loaderSlice';


export const MainPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideLoader());
    }, 100);
  }, [])


  const { testId, headerBtnIcon } = useResizeChecker();

  return (
    <Layout className="site-layout">
      <Sider testId={testId} />
      <Layout className='content-layout'>
        <PageHeader headerBtnIcon={headerBtnIcon} />
        <MainContent />
        <Footer />
      </Layout>
    </Layout>
  );
};
