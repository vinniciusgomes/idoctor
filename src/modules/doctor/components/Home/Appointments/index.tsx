import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { format } from 'date-fns';

import avatarIcon from '@shared/assets/images/avatar.png';

import { Container, Item } from './styles';
import { IAppointmentsItemProps } from './interfaces';

const AppointmentsItem: React.FC<IAppointmentsItemProps> = props => {
  const patient = props.patient;

  return (
    <Container
      className="mb-3"
      onClick={() => props.handleOpenModal(patient.id)}
    >
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
        <FiMoreVertical color="#D6DADF" size={20} />
      </Item>
    </Container>
  );
};

export default AppointmentsItem;
