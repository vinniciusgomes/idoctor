import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

import avatarIcon from '@shared/assets/images/avatar.png';
import { IAppointments } from '@doctor/pages/Dashboard/interfaces';
import { Container, Item } from './styles';
import { format } from 'date-fns';

const AppointmentsItem: React.FC<IAppointments> = props => {
  const patientData = props.patient;

  return (
    <Container className="mb-3">
      <Item>
        <div>
          <img
            src={patientData.avatar ? patientData.avatar : avatarIcon}
            alt={patientData.name}
          />
          <span>{patientData.name}</span>
        </div>
        <div>
          <span>{patientData.phone}</span>
        </div>
        <div>
          <span>
            {format(new Date(props.date), 'dd/MM/yy')} ás {props.start_time}
          </span>
        </div>
        <FiMoreVertical color="#D6DADF" size={20} />
      </Item>
    </Container>
  );
};

export default AppointmentsItem;
