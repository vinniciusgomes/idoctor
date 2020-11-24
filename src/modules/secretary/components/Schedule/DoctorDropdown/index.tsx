import React, { useCallback, useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message } from 'antd';

import api from '@shared/services/api';

import { SelectDoctorButton } from './styles';
import { IDoctorData, IDoctorDropdownProps } from './interfaces';

const DoctorDropdown: React.FC<IDoctorDropdownProps> = ({
  setDoctorId,
  setDoctorName,
}) => {
  const [selectedDoctorName, setSelectedDoctorName] = useState('carregando...');
  const [doctorList, setDoctorList] = useState<IDoctorData[]>([]);

  const DropdownMenu = useCallback(
    () => (
      <Menu>
        {doctorList.map(doctor => (
          <Menu.Item
            key={doctor.id}
            onClick={() => {
              setSelectedDoctorName(doctor.user.name);
              setDoctorName(doctor.user.name);
              setDoctorId(doctor.id);
            }}
          >
            {doctor.user.name}
          </Menu.Item>
        ))}
      </Menu>
    ),
    [doctorList],
  );

  const getDoctorInfo = useCallback(async () => {
    try {
      const response = await api.get('users/doctors');

      const doctorData: IDoctorData[] = response.data;

      setDoctorList(doctorData);
      setDoctorId(doctorData[0].id);
      setSelectedDoctorName(doctorData[0].user.name);
      setDoctorName(doctorData[0].user.name);
    } catch (err) {
      if (err.response) {
        return message.error(err.response.data.message);
      }

      return message.error(
        'Ocorreu um erro interno na aplicação. Tente novamente mais tarde!',
      );
    }
  }, []);

  useEffect(() => {
    getDoctorInfo();
  }, []);

  return (
    <Dropdown overlay={DropdownMenu} placement="bottomCenter" arrow>
      <SelectDoctorButton>
        <span>{selectedDoctorName}</span>
        <DownOutlined />
      </SelectDoctorButton>
    </Dropdown>
  );
};

export default DoctorDropdown;
