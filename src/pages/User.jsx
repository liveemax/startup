import React, {useContext} from 'react';
import Aside from "../components/Aside";
import Content from "../components/Content";
import { UserMain } from '../styles/styles';
import {Trigger} from '../App';

function User() {
    const {state}=useContext(Trigger)
  return (
    <>
      <UserMain>
        <Aside localUser={state.localUser}/>
        <Content />
      </UserMain>
    </>
  );
}

export default User;
