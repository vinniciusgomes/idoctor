import { IAppointments } from '@/modules/doctor/pages/Dashboard/interfaces';
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

interface ICalendarProps {
  appointments: IAppointments[];
}

const Calendar: React.FC<ICalendarProps> = ({ appointments }) => (
  <Container>
    <Header>
      <div>
        <FiChevronLeft color="#7081FA" />
        <h1>Outubro de 2020</h1>
        <FiChevronRight color="#7081FA" />
      </div>
    </Header>

    <DaysList>
      {dayList.map(day => (
        <div key={day.number}>
          <strong>{day.label}</strong>
          <DayNumber selected={day.selected} disabled={day.status}>
            <span>{day.number}</span>
          </DayNumber>
        </div>
      ))}
    </DaysList>
    <EventList>
      {appointments.map(appointment => (
        <div key={appointment.id}>
          <span>{appointment.start_time}</span>
          <Event emergency={appointment.type === 3 ? true : false}>
            <strong>{appointment.patient.name}</strong>
            <span>{appointment.start_time}</span>
          </Event>
        </div>
      ))}
    </EventList>
  </Container>
);

export default Calendar;
