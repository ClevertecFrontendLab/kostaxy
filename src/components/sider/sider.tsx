import React, { useState } from 'react';

import {
  HeartFilled,
  IdcardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TrophyFilled,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';


import imgSmall from '../../assets/svg/logo/fit.svg';
import imgLarge from '../../assets/svg/logo/Cleverfit.svg';
import ExitIcon from '@components/exitIcon';
import CalendarIcon from '@components/calendarIcon';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { logout } from '@redux/authSlice';
import { redirectTo } from '../../routes/routes';
import PATHS from '../../routes/paths';

const { Sider } = Layout;
type Props = { testId: string, isCollapsed?: boolean }
const MySider = React.memo(({ testId, isCollapsed = false }: Props) => {
  const [collapsed, setCollapsed] = useState(isCollapsed);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    redirectTo(PATHS.auth);
  }

  const toggle = () => {
    setCollapsed(!collapsed);
  }

  const menuItems =
    [
      {
        key: '1',
        icon: <CalendarIcon />,
        label: `${!collapsed ? 'Календарь' : ''}`,
      },
      {
        key: '2',
        icon: <HeartFilled />,
        label: `${!collapsed ? 'Тренировки' : ''}`,
      },
      {
        key: '3',
        icon: <TrophyFilled />,
        label: `${!collapsed ? 'Достижения' : ''}`,
      },
      {
        key: '4',
        icon: <IdcardOutlined />,
        label: `${!collapsed ? 'Профиль' : ''}`,
      }
    ]
  const menuExitItem = [
    {
      className: "sign-out",
      key: '5',
      icon: <ExitIcon />,
      label: `${!collapsed ? 'Выход' : ''}`,
      onClick: handleLogout
    }
  ]

  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={toggle}
      style={{ position: 'relative' }}>

      <div className="sider-container">
        <div className="logo">
          {
            !collapsed
              ? <img src={imgLarge} alt="logo" />
              : <img src={imgSmall} alt="logo" />
          }
        </div>
        <div className="menu-container">
          <Menu
            className="menu"
            mode="inline"
            items={menuItems}
          />
          <Menu
            className="menu"
            mode="inline"
            items={menuExitItem}
          />
        </div>
        <span
          data-test-id={testId}
          className="switcher"
          onClick={toggle}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </span>
      </div>
    </Sider>
  );
});

export default MySider