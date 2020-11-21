import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

import avatarIcon from '@shared/assets/images/avatar.png';
import { IAppointments } from '@doctor/pages/Dashboard/interfaces';
import { Container, Item } from './styles';
import { format } from 'date-fns';

const AppointmentsItem: React.FC<IAppointments> = props => {
  const patient = props.patient;
  const doctor = props.doctor;

  return (
    <Container className="mb-3">
      <Item>
        <div>
          <img
            src={patient.avatar ? patient.avatar : avatarIcon}
            alt={patient.name}
          />
          <span>{patient.name}</span>
        </div>
        <div>
          <span>{patient.phone}</span>
        </div>
        <div>
          <span>
            {format(new Date(props.date), 'dd/MM/yy')} ás {props.start_time}
          </span>
        </div>
        <div>
          <span>{doctor.user.name}</span>
        </div>
        <FiMoreVertical color="#D6DADF" size={20} />
      </Item>
    </Container>
  );
};

export default AppointmentsItem;
