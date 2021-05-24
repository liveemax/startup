import React from 'react';
import styled from 'styled-components';
import Aside from './../components/Aside';

const Main = styled.main`
  margin: 28px 56px;
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
    </Main>
  </>;
}

export default User;
