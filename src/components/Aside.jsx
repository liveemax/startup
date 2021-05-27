import React from 'react';
import { faUserFriends, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserAside, UserAsideIcons, UserAsideImg } from '../styles/styles';

const Aside=React.memo((props)=>{
    const {localUser}=props
  const { avatar_url, name, login, followers, following, html_url } =
    localUser || '';
  debugger;
  return (
    <UserAside>
      <img src={avatar_url} alt="user" />
      <UserAsideImg>{name || ''}</UserAsideImg>
      <a href={html_url} target="_blank" rel="noreferrer">
        {login}
      </a>
      <UserAsideIcons>
        <span>
          <FontAwesomeIcon icon={faUserFriends} />
          {followers} followers
        </span>
        <span>
          <FontAwesomeIcon icon={faUser} />
          {following} following
        </span>
      </UserAsideIcons>
    </UserAside>
  );
})

export default Aside;
