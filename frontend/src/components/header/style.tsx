import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 7.6rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 4.6rem;
    height: 4.6em;
    border-radius: 50%;
    margin-right: 1.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: transparent;

  > svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
