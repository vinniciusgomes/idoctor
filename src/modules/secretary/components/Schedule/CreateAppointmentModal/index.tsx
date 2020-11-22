import React, { useState } from 'react';

import { Container, NameTextField } from './styles';

const CreateAppointmentModal: React.FC = () => {
  const mockVal = (str: string, repeat: number = 1) => {
    return {
      value: str.repeat(repeat),
    };
  };

  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <Container>
      <NameTextField
        value={value}
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </Container>
  );
};

export default CreateAppointmentModal;
