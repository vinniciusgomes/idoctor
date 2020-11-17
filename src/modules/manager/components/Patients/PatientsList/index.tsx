import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

import { Container, Item } from './styles';

const patientsMock = [
  {
    id: 1231312,
    name: 'Liam J.',
    avatar: 'static/images/patients/2.png',
    lastAppointment: '17/08/2020 as 11:30 Am',
    nextAppointment: 'Hoje as 10:00 Am',
  },
  {
    id: 1231312,
    name: 'Courtney C.',
    avatar: 'static/images/patients/1.png',
    lastAppointment: '02/10/2020 as 09:00 Am',
    nextAppointment: 'Hoje as 11:30 Am',
  },
  {
    id: 1231312,
    name: 'Andreea C. Parker',
    avatar: 'static/images/patients/3.png',
    lastAppointment: '11/08/2020 as 11h30',
    nextAppointment: 'Hoje as 13:00 Pm',
  },
  {
    id: 1231312,
    name: 'Andreea C. Parker',
    avatar:
      'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    lastAppointment: '17/08/2020 as 11h30',
    nextAppointment: 'Sem retorno marcado',
  },
  {
    id: 1231312,
    name: 'Andreea C. Parker',
    avatar:
      'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    lastAppointment: '17/08/2020 as 11h30',
    nextAppointment: 'Sem retorno marcado',
  },
  {
    id: 1231312,
    name: 'Andreea C. Parker',
    avatar:
      'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    lastAppointment: '17/08/2020 as 11h30',
    nextAppointment: 'Sem retorno marcado',
  },
  {
    id: 1231312,
    name: 'Andreea C. Parker',
    avatar:
      'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    lastAppointment: '17/08/2020 as 11h30',
    nextAppointment: 'Sem retorno marcado',
  },
  {
    id: 1231312,
    name: 'Andreea C. Parker',
    avatar:
      'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    lastAppointment: '17/08/2020 as 11h30',
    nextAppointment: 'Sem retorno marcado',
  },
  {
    id: 1231312,
    name: 'Andreea C. Parker',
    avatar:
      'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    lastAppointment: '17/08/2020 as 11h30',
    nextAppointment: 'Sem retorno marcado',
  },
  {
    id: 1231312,
    name: 'Andreea C. Parker',
    avatar:
      'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    lastAppointment: '17/08/2020 as 11h30',
    nextAppointment: 'Sem retorno marcado',
  },
];

interface ListProps {
  max?: number;
}

const PatientsList: React.FC<ListProps> = ({ max = 10 }) => (
  <Container>
    <ul>
      {patientsMock.map((patient, index) => {
        if (index <= max - 1) {
          return (
            <Item key={patient.id}>
              <div>
                <img src={patient.avatar} alt={patient.name} />
                <span>{patient.name}</span>
              </div>
              <div>
                <span>{patient.lastAppointment}</span>
              </div>
              <div>
                <span>{patient.nextAppointment}</span>
              </div>
              <FiMoreVertical color="#D6DADF" size={20} />
            </Item>
          );
        }
      })}
    </ul>
  </Container>
);

export default PatientsList;
