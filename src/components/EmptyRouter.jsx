import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import cross from '../assets/img/cross.svg';
import { EmptyText } from '../styles/styles';

const EmptyRouter = React.memo((props) => {
  const {localRepos,localUser,localPath,notFound,localIcon,localText,dispatch}=props
  useEffect(() => {
    if (
      localPath === process.env.REACT_APP_USER_ROUTE &&
      localRepos.length === 0
    ) {
      dispatch({type:'setLocalIcon',localIcon:<img src={cross} alt="empty repos" />})
      dispatch({type:'setLocalText',localText:'Repository list is empty'})
      return;
    }
    if (localPath === process.env.REACT_APP_USER_ROUTE) {
      dispatch({type:'setLocalIcon',localIcon:''})
      dispatch({type:'setLocalText',localText:''})
    }
    if (localUser) {
      if (localUser.login) {
        dispatch({type:'setLocalPath',localPath:`${process.env.REACT_APP_USER_ROUTE}`})
        return;
      }
      if (localUser.message === notFound) {
        dispatch({type:'setLocalIcon',localIcon:<FontAwesomeIcon icon={faUser} />})
        dispatch({type:'setLocalText',localText:'User not found'})
      }
    }
  }, [localUser]);
  return (
    <EmptyText>
      <div>{localIcon}</div>
      <div>{localText}</div>
    </EmptyText>
  );
})

export default EmptyRouter;
