import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'Oswald', 'Arial Narrow', sans-serif;
`;
export const H2 = styled.h2`
  font-family: 'Oswald', 'Arial Narrow', sans-serif;
`;
export const H3 = styled.h3`
  font-family: 'Oswald', 'Arial Narrow', sans-serif;
`;

export const Code = styled.code`
  display: block;
  margin: 20px 0 15px 0;
  padding: 10px;
  background: #eee;
`;
export const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  padding: 45px 20px;
`;

/* NAVBAR */

export const Nav = styled.nav`
  position: fixed;
  padding: 5px;
  background: #0c1a2b;
  width: 100%;
  font-family: 'Oswald', 'Arial Narrow', sans-serif;
`;
export const NavA = styled.a`
  color: #fff;
  font-weight: bold;
  text-transform: none;
  &:active, &:focus, &:hover {
    background: #233e5e;
  }`;
