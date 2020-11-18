import React from 'react';
import { Calendar, Badge } from 'antd';

import Navbar from '@shared/components/Navbar';

import { Container } from './styles';

function getListData(value: any) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value: any) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={'warning'} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value: any) {
  if (value.month() === 8) {
    return 1394;
  }
}

const Schedule: React.FC = () => (
  <Navbar pageSelected="schedule">
    <Container>
      <h1>Agenda</h1>

      <Calendar
        dateCellRender={dateCellRender}
        style={{ padding: 20, borderRadius: 10 }}
      />
    </Container>
  </Navbar>
);

export default Schedule;
