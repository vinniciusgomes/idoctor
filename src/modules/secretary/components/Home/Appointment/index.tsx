import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { format } from 'date-fns';

import avatarIcon from '@shared/assets/images/avatar.png';
import { Container, Item } from './styles';
import { IAppointmentItemProps } from './interfaces';

const AppointmentItem: React.FC<IAppointmentItemProps> = props => {
  const patient = props.patient;
  const doctor = props.doctor;

  const appointmentHour = props.start_time.split(':');

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
            {format(new Date(props.date).setHours(24), 'dd/MM/yy')} ás{' '}
            {`${appointmentHour[0]}:${appointmentHour[1]}`}
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

export default AppointmentItem;
