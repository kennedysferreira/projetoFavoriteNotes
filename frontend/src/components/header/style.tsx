import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 8.4rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    margin-right: 1.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: transparent;

  > svg {
    width: 2.6rem;
    height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
