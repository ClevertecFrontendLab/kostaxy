import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';


export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/main">Главная</Link>
      </Breadcrumb.Item>
      {pathnames.map((value, index) => {
        if (value === 'main') {
          return null;
        }

        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        const nameMap: any = {
          feedbacks: 'Отзывы пользователей',
        };

        return (
          <Breadcrumb.Item key={to}>
            <Link to={to}>{nameMap[value]}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

