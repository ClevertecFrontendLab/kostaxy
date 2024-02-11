import React from 'react';

import {
  SettingOutlined,
} from '@ant-design/icons';
import { Button, PageHeader as AntdPageHeader } from 'antd';


const breadcrumbs = [
  {
    path: '/',
    breadcrumbName: 'Главная',
  },
];
type Props = { headerBtnIcon: boolean }
const PageHeader = React.memo(({ headerBtnIcon }: Props) => {

  return (
    <AntdPageHeader
      className="site-page-header"
      breadcrumb={{ routes: breadcrumbs }}
    >
      <div className="header-container">
        <h1>Приветствуем тебя в CleverFit — приложении,<br /> которое поможет тебе добиться своей мечты!</h1>
        {
          headerBtnIcon
            ? <Button shape="circle" icon={<SettingOutlined />} />
            : <Button type="text" icon={<SettingOutlined />}>Настройки</Button>
        }
      </div>
    </AntdPageHeader>
  );
});

export default PageHeader
