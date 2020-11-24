import React, { useCallback, useEffect, useState } from 'react';
import { Calendar, Badge, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { format } from 'date-fns';

import Navbar from '@shared/components/Navbar';

import api from '@shared/services/api';
import DoctorDropdown from '@secretary/components/Schedule/DoctorDropdown';
import CreateAppointmentModal from '@secretary/components/Schedule/CreateAppointmentModal';

import { IAppointment, IEvent } from './interfaces';
import { Container, Header, NewAppointmentButton } from './styles';

const Schedule: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [year, setYear] = useState(format(new Date(), 'yyyy'));
  const [month, setMonth] = useState(format(new Date(), 'MM'));
  const [doctorId, setDoctorId] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const [visible, setVisible] = useState(false);

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
          {listData.map((item, index) => (
            <li key={index}>
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
        `appointments/month/doctor/${doctorId}?month=${month}&year=${year}&limit=5000`,
      );

      setAppointments(response.data);
    } catch (err) {
      if (err.response) {
        return message.error(err.response.data.message);
      }

      return message.error(
        'Ocorreu um erro interno na aplicação. Tente novamente mais tarde!',
      );
    }
  }, [month, year, doctorId]);

  useEffect(() => {
    if (doctorId) {
      getAppointments();
    }
  }, [month, year, doctorId]);

  return (
    <Navbar pageSelected="schedule">
      <Container>
        <Header>
          <h1>Agenda</h1>
          <div>
            <NewAppointmentButton onClick={() => setVisible(true)}>
              <span>Nova consulta</span>
              <PlusOutlined />
            </NewAppointmentButton>
            <DoctorDropdown
              setDoctorId={setDoctorId}
              setDoctorName={setDoctorName}
            />
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
          <CreateAppointmentModal doctorId={doctorId} doctorName={doctorName} />
        </Modal>
      </Container>
    </Navbar>
  );
};

export default Schedule;
