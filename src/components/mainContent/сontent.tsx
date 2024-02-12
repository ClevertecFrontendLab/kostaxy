import React from 'react';

import {
  HeartFilled,
  IdcardOutlined,
} from '@ant-design/icons';
import { Button, Card, Layout } from 'antd';
import CalendarIcon from '@components/calendarIcon';


const { Content } = Layout;

const MainContent: React.FC = () => {
  return (
    <Content>
      <div className="card-container">
        <Card className='main-card'>
          С CleverFit ты сможешь:
          <br />— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
          <br />— отслеживать свои достижения в разделе статистики, сравнивая свои результаты c нормами и рекордами;
          <br />— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;
          <br />— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.
        </Card>

        <div className="card-sub-container">
          <Card className='info-card'>
            CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
          </Card>
          <div className="action-cards-container">
            <Card title="Расписать тренировки" className='action-card'>
              <Button type='link' icon={<HeartFilled />}>Тренировки</Button>
            </Card>
            <Card title="Назначить календарь" className='action-card'>
              <Button type='link' icon={<CalendarIcon />}>Календарь</Button>
            </Card>
            <Card title="Заполнить профиль" className='action-card'>
              <Button type='link' icon={<IdcardOutlined />}>Профиль</Button>
            </Card>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default MainContent