import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router';
import * as userApi from '../api/userApi';
import { NavbarForm, NavbarGithub, NavbarHeader } from '../styles/styles';

const Navbar =React.memo((props) => {
  const {dispatch,notFound,localPath,searchInput}=props
  return (
    <NavbarHeader>
      <NavbarGithub>
        <FontAwesomeIcon icon={faGithub} />
      </NavbarGithub>
      <NavbarForm>
        <label>
          <FontAwesomeIcon icon={faSearch} />
          <input
            autoComplete="off"
            onChange={(e) => {
              dispatch({type:'setSearchInput',searchInput:e.currentTarget.value})
            }}
            id="search"
            type="text"
            value={searchInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch({type:'setLocalSpinner',localSpinner:true})
                const user = userApi.getUser(`${searchInput}`);
                const repos = userApi.getRepos(`${searchInput}`);
                Promise.all([user, repos]).then((result) => {
                  dispatch({type:'setLocalRepos',localRepos:result[1]})
                  dispatch({type:'setLocalUser',localUser:result[0]})
                  dispatch({type:'setLocalSpinner',localSpinner:false})
                  dispatch({type:'setLocalPath',localPath:`${process.env.REACT_APP_USER_ROUTE}`})
                  if (result[0].message === notFound)
                    dispatch({type:'setLocalPath',localPath:`${process.env.REACT_APP_HOME_ROUTE}`})
                });
                e.preventDefault();
                dispatch({type:'setSearchInput',searchInput:''})
              }
            }}
          />
        </label>
      </NavbarForm>
      <Redirect to={{ pathname: `${localPath}` }} />
    </NavbarHeader>
  );
})

export default Navbar;
