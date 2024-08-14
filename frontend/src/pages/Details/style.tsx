import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 8.4rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
  }
`;

export const Links = styled.ul`
  list-style: none;
  > li {
    margin-top: 1.2rem;
    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      transition: ease-out 0.2s;
    }
    a:hover {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`;

export const Content = styled.div`
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    line-height: 32px;
    margin-top: 16px;
    text-align: justify;
  }
`;
