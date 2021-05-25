import React from 'react';
import styled from 'styled-components';
import Aside from './../components/Aside';
import Content from './../components/Content';

const Main = styled.main`
  margin: 40px 56px;
  height: calc(100vh - 120px);
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;

function User() {
  return <>
    <Main>
      <Aside/>
      <Content/>
    </Main>
  </>;
}

export default User;
