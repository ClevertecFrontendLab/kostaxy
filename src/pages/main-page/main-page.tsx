import React, { useEffect } from 'react';

import { Layout } from 'antd';
import { useResizeChecker } from '@hooks/resizeChecker';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { hideLoader } from '@redux/loaderSlice';
import { Footer } from '@components/footer/footer';
import { MainContent } from '@components/mainContent/сontent';
import { PageHeader } from '@components/pageHeader/pageHeader';
import { MySider } from '@components/sider/sider';


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
      <MySider testId={testId} />
      <Layout className='content-layout'>
        <PageHeader headerBtnIcon={headerBtnIcon} />
        <MainContent />
        <Footer />
      </Layout>
    </Layout>
  );
};
