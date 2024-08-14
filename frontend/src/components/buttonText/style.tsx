// ./style.ts
import styled from "styled-components";

type ContainerProps = {
  $isactive?: 'true' | 'false';
};

export const Container = styled.button<ContainerProps>`
 color: ${({ theme, $isactive }) =>
    $isactive === 'true' ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  background: transparent;
  border: none;
  font-size: 16px;
`;
