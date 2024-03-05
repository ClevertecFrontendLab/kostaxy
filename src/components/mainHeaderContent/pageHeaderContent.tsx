import React from 'react';
import { PageHeader as AntdPageHeader } from 'antd';
import Breadcrumbs from '@components/breadcrumbs';


const HeaderBreadcrumbs = React.memo(() => {


  return (
    <AntdPageHeader
      className="site-page-header"
      breadcrumb={<Breadcrumbs />}
    />
  );
});

export default HeaderBreadcrumbs
