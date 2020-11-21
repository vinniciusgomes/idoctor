import { IPatient } from '@/modules/doctor/pages/Patients/interfaces';
import React from 'react';
import { FiMoreVertical, FiTrash, FiPenTool } from 'react-icons/fi';

import avatarIcon from '@shared/assets/images/avatar.png';
import { Container, Item } from './styles';

const PatientsList: React.FC<IPatient> = props => (
  <Container id={props.id}>
    <Item>
      <div>
        <img src={props.avatar ? props.avatar : avatarIcon} alt={props.name} />
        <span>{props.name}</span>
      </div>

      <div>
        <FiTrash color="#FA7070" size={20} />
        <FiPenTool color="#D6DADF" size={20} />
      </div>
    </Item>
  </Container>
);

export default PatientsList;
