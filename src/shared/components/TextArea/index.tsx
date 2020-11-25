import React, { TextareaHTMLAttributes } from 'react';

import { Container, TextArea, Label } from './styles';

interface ITextFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerStyle?: object;
  label?: string;
}

const TextAreaComponent: React.FC<ITextFieldProps> = ({
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
      <TextArea {...rest} rows={5} />
    </Container>
  );
};

export default TextAreaComponent;
