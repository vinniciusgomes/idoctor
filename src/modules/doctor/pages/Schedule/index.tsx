import React, { useCallback, useEffect, useState } from 'react';
import { Calendar, Badge, Skeleton } from 'antd';
import { format } from 'date-fns';

import Navbar from '@shared/components/Navbar';

import api from '@shared/services/api';
import Loading from '@shared/components/Loading';

import { IAppointment, IEvent } from './interfaces';
import { Container } from './styles';

const Schedule: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [year, setYear] = useState(format(new Date(), 'yyyy'));
  const [month, setMonth] = useState(format(new Date(), 'MM'));
  const [loading, setLoading] = useState(true);

  const dateCellRender = useCallback(
    (value: any) => {
      let listData: IEvent[] = [];

      appointments.map(appointment => {
        const formattedDay = format(new Date(appointment.date), 'dd');

        if (parseInt(formattedDay) === value.date()) {
          listData = [
            ...listData,
            {
              type: appointment.type === 3 ? 'error' : 'processing',
              content: `${format(
                new Date(appointment.date + ' ' + appointment.start_time),
                'HH:mm',
              )} - ${appointment.patient.name}`,
            },
          ];
        }
      });

      return (
        <ul className="events">
          {listData.map(item => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))}
        </ul>
      );
    },
    [appointments],
  );

  const handleDateChange = useCallback(date => {
    const month = date.month() + 1;
    const year = date.year();

    setAppointments([]);

    setYear(year);
    setMonth(month);
  }, []);

  const getAppointments = useCallback(async () => {
    try {
      const response = await api.get(
        `appointments/month?month=${month}&year=${year}&limit=5000`,
      );

      setAppointments(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [month, year]);

  useEffect(() => {
    getAppointments();
  }, [month, year]);

  return (
    <Navbar pageSelected="schedule">
      {loading ? (
        <>
          <Skeleton loading={loading} active />
          <Skeleton loading={loading} active />
          <Skeleton loading={loading} active />
          <Loading />
        </>
      ) : (
        <Container>
          <h1>Agenda</h1>

          <Calendar
            dateCellRender={dateCellRender}
            onChange={handleDateChange}
            style={{ padding: 20, borderRadius: 10 }}
          />
        </Container>
      )}
    </Navbar>
  );
};

export default Schedule;
