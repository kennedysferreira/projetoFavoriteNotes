import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 7.6rem 12.8rem auto 6.4rem;
  grid-template-areas: 
  "brand header" 
  "menu search" 
  "menu content" 
  "newNote content";
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
grid-area: brand;
font-size: 2;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
color: ${({theme}) => theme.COLORS.ORANGE};
`;

export const Menu = styled.ul`
grid-area: menu;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
display: flex;
align-items: center;
gap: 1rem;
flex-direction: column;
padding-top: 1rem;
`;

export const Search = styled.div`
grid-area: search;
`;
export const Content = styled.div`
grid-area: content;
`;
export const NewNote = styled.button`
grid-area: newNote;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
`;
