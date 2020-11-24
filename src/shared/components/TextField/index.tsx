import React, { InputHTMLAttributes } from 'react';

import { Container, Input, Label } from './styles';

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: object;
  hasError?: boolean;
  label?: string;
}

const TextFieldComponent: React.FC<ITextFieldProps> = ({
  hasError = false,
  label,
  required,
  ...rest
}) => {
  return (
    <Container>
      {label && (
        <Label>
          {label} {required && <b>*</b>}
        </Label>
      )}
      <Input {...rest} hasError={hasError} />
    </Container>
  );
};

export default TextFieldComponent;
