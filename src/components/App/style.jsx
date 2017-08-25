import styled from 'styled-components';

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -3%;
`;
export const H1 = styled.h1`
  font-family: "Source Sans Pro",Helvetica,Arial,sans-serif;
  text-align: center;
  font-size: 46px;
  font-weight: 100;
  margin-bottom: -1%;
`;
export const H2 = styled.h2`
  font-family: "Source Sans Pro",Helvetica,Arial,sans-serif;
  font-color: #333;
  font-weight: 100;
  text-align: center;

`;
export const H3 = styled.h3`
  text-align: center;
  font-weight: 100;
  font-family: "Source Sans Pro",Helvetica,Arial,sans-serif;
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
export const P = styled.p`
  text-align: center;
`;

/* NAVBAR */

export const Nav = styled.nav`
  position: fixed;
  padding: 5px;
  background: #0c1a2b;
  width: 100%;
  font-family: "Source Sans Pro",Helvetica,Arial,sans-serif;
`;
export const NavA = styled.a`
  color: #fff;
  font-weight: bold;
  text-transform: none;
  &:active, &:focus, &:hover {
    background: #233e5e;
  }`;
