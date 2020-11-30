import React from 'react';

import avatarIcon from '@shared/assets/images/avatar.png';
import trashIcon from '@shared/assets/images/trash.svg';
import pencilIcon from '@shared/assets/images/pencil.svg';

import { ActionIcon, Container, Item } from './styles';
import { IPatient } from './interface';

const PatientsList: React.FC<IPatient> = props => (
  <Container id={props.id}>
    <Item>
      <div>
        <img src={props.avatar ? props.avatar : avatarIcon} alt={props.name} />
        <span>{props.name}</span>
      </div>

      <div>
        <ActionIcon src={trashIcon} alt="trash" />
        <ActionIcon src={pencilIcon} alt="pencil" />
      </div>
    </Item>
  </Container>
);

export default PatientsList;
