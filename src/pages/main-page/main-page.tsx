import React from 'react';

import { Layout } from 'antd';
import Footer from '@components/footer'
import Sider from '@components/sider';
import { useResizeChecker } from '@hooks/resizeChecker';
import PageHeader from '@components/pageHeader/pageHeader';
import MainContent from '@components/mainContent/сontent';


export const MainPage: React.FC = () => {


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
