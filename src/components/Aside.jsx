import React from 'react';
import styled from 'styled-components';
import {faUserFriends, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Second = styled.aside`
  width: 100%;
  max-width: 310px;
  padding: 0 5px;
  img{
    border-radius: 100%;
    width: 100%;
  }
  a{
    color: ${props=>props.theme.primary};
    font-size: 1.2rem;
    text-decoration: none;
  }
`;

const SubImg=styled.p`
font-size: 1.5rem;
  font-weight: 600;
  margin: 28px 0 10px;
`;

const IconsContainer=styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 25px;
  svg{
    margin-right: 10px;
    color: ${props=>props.theme.icons};
  }
`;


function Aside() {
    const user=JSON.parse(sessionStorage.getItem("user"))
    const {avatar_url,name,login,followers,following,html_url}=user||""
    return (
        <Second>
            <img src={avatar_url||"a"} alt=""/>
            <SubImg>{name||""}</SubImg>
            <a href={html_url} target={"_blank"}>{login}</a>
            <IconsContainer>
                <span><FontAwesomeIcon icon={faUserFriends }/>{followers} followers</span>
                <span><FontAwesomeIcon icon={faUser } />{following} following</span>
            </IconsContainer>
        </Second>
    );
}

export default Aside;