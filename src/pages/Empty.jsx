import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Trigger } from '../App';
import EmptyRouter from '../components/EmptyRouter';
import {Redirect} from 'react-router';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.icons};
  font-size: 1.5rem;
  max-width: 210px;
  text-align: center;
  svg {
    font-size: 90px;
    margin-bottom: 20px;
  }
`;

function Empty() {
  const notFound = 'Not Found';
  const [localUser, setLocalUser] = useState('');
  const { localTrigger,localPath,setLocalPath} = useContext(Trigger);
  const getUser=sessionStorage.getItem('user')
  useEffect(() => {
    if(getUser&&JSON.parse(getUser).login)
    {
      sessionStorage.setItem('user', `{}`);
      setLocalPath('/')
    }
  }, []);
  useEffect(() => {
    if (!getUser) {
      sessionStorage.setItem('user', `{}`);
      return;
    }
    if (JSON.parse(getUser).message === notFound) {
      setLocalUser(notFound);
      return
    }
    setLocalUser(JSON.parse(getUser));
  }, [localTrigger]);
  return (
    <Container>
      <EmptyRouter
        localUser={localUser}
        notFound={notFound}
        setLocalPath={setLocalPath}
      />
      <Redirect to={{pathname: `${localPath}`}}/>
    </Container>
  );
}

export default Empty;
