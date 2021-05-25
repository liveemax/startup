import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import cross from '../assets/img/cross.svg';

const Text=styled.div`
  img{
    margin-bottom: 20px;
  }`;

const EmptyRouter=(props)=> {
  const { localUser, notFound,setLocalPath} = props;
  const repos=JSON.parse(sessionStorage.getItem("repos"))
  const [localIcon, setLocalIcon] = useState(
    <FontAwesomeIcon icon={faSearch} />
  );
  const [localText, setLocalText] = useState(
    'Start with searching a GitHub user'
  );
  useEffect(() => {
    if (window.location.pathname===`/user`&&repos.length===0) {
      setLocalIcon(<img src={cross}/>);
      setLocalText('Repository list is empty');
      return
    }
    if(window.location.pathname===`/user`)
    {
      setLocalIcon("")
      setLocalText("")
    }
    if (localUser) {
      if (localUser.login) {
        setLocalPath('/user')
        return;
      }
      if (localUser=== notFound) {
        setLocalIcon(<FontAwesomeIcon icon={faUser} />);
        setLocalText('User not found');
      }
    }
  }, [localUser]);
  return (
    <Text>
      <div>{localIcon}</div>
      <div>{localText}</div>
    </Text>
  );
}

export default EmptyRouter;
