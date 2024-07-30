import React from 'react';
import { Container } from "./style";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: any;
}

export function Textarea({ value, ...rest }: TextareaProps) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  );
}
