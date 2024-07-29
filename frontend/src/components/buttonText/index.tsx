
import React from 'react';
import { Container } from './style';

type ButtonProps = {
  title: string | number;
  isActive?: boolean; // se for true, o botão ficará com a cor de atividade
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonText({ title, isActive, ...rest }: ButtonProps) {
  return (
    <Container $isactive={isActive ? 'true' : 'false'} {...rest}>
      {title}
    </Container>
  );
}
