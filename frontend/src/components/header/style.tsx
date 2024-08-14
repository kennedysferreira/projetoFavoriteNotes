import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 76px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    margin-right: 16px;
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 20px;

    span {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: transparent;

  > svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
