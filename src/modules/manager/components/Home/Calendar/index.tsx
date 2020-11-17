import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import {
  Container,
  DayNumber,
  DaysList,
  Event,
  EventList,
  Header,
} from './styles';

const dayList = [
  {
    number: '11',
    label: 'DOM',
    status: true,
  },
  {
    number: '12',
    label: 'SEG',
    status: false,
  },
  {
    number: '13',
    label: 'TER',
    status: false,
    selected: true,
  },
  {
    number: '14',
    label: 'QUA',
    status: false,
  },
  {
    number: '15',
    label: 'QUI',
    status: false,
  },
  {
    number: '16',
    label: 'SEX',
    status: false,
  },
  {
    number: '17',
    label: 'SAB',
    status: true,
  },
];

const Calendar: React.FC = () => (
  <Container>
    <Header>
      <div>
        <FiChevronLeft color="#7081FA" />
        <h1>Outubro de 2020</h1>
        <FiChevronRight color="#7081FA" />
      </div>
    </Header>

    <DaysList>
      {dayList.map((day) => (
        <div key={day.number}>
          <strong>{day.label}</strong>
          <DayNumber selected={day.selected} disabled={day.status}>
            <span>{day.number}</span>
          </DayNumber>
        </div>
      ))}
    </DaysList>
    <EventList>
      <div>
        <span>10:00</span>
        <Event emergency>
          <strong>Liam J.</strong>
          <span>10:00 Am - 11:00 Am</span>
        </Event>
      </div>
      <div>
        <span>11:30</span>
        <Event>
          <strong>Courtney C.</strong>
          <span>11:30 Am - 12:00 Pm</span>
        </Event>
      </div>
      <div>
        <span>13:00</span>
        <Event>
          <strong>Andreea P.</strong>
          <span>13:00 Pm - 14:00 Pm</span>
        </Event>
      </div>
      <div>
        <span>14:50</span>
        <Event>
          <strong>Ansley P.</strong>
          <span>14:50 Pm - 15:30 Pm</span>
        </Event>
      </div>
    </EventList>
  </Container>
);

export default Calendar;
