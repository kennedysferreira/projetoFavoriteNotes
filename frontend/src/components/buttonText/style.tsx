import styled from "styled-components";


type ContainerProps = {
  isActive?: boolean;
};

export const Container = styled.button<ContainerProps>`
  background: transparent;
  color: ${({ theme, isActive }) => (isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100)};
  border: none;
  font-size: 1.4rem;
`;
