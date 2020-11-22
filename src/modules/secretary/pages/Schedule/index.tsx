import React, { useCallback, useEffect, useState } from 'react';
import { Calendar, Badge, Skeleton, Dropdown, Modal } from 'antd';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { format } from 'date-fns';

import Navbar from '@shared/components/Navbar';

import api from '@shared/services/api';
import Loading from '@shared/components/Loading';
import DropdownMenu from '@secretary/components/Schedule/DropdownMenu';
import CreateAppointmentModal from '@secretary/components/Schedule/CreateAppointmentModal';

import { IAppointment, IEvent } from './interfaces';
import {
  Container,
  Header,
  SelectDoctorButton,
  NewAppointmentButton,
} from './styles';

const Schedule: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [year, setYear] = useState(format(new Date(), 'yyyy'));
  const [month, setMonth] = useState(format(new Date(), 'MM'));
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

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
          <Header>
            <h1>Agenda</h1>
            <div>
              <NewAppointmentButton onClick={() => setVisible(true)}>
                <span>Nova consulta</span>
                <PlusOutlined />
              </NewAppointmentButton>

              <Dropdown overlay={DropdownMenu} placement="bottomCenter" arrow>
                <SelectDoctorButton>
                  <span>Dr Vinnicius</span>
                  <DownOutlined />
                </SelectDoctorButton>
              </Dropdown>
            </div>
          </Header>
          <Calendar
            dateCellRender={dateCellRender}
            onChange={handleDateChange}
            style={{ padding: 20, borderRadius: 10 }}
          />

          <Modal
            centered
            visible={visible}
            onCancel={() => setVisible(false)}
            width={1000}
            footer={false}
          >
            <CreateAppointmentModal />
          </Modal>
        </Container>
      )}
    </Navbar>
  );
};

export default Schedule;
