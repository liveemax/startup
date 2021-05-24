import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const EmptyRouter=React.memo=(props)=> {
  const { localUser, notFound,setLocalPath} = props;
  const [localIcon, setLocalIcon] = useState(
    <FontAwesomeIcon icon={faSearch} />
  );
  const [localText, setLocalText] = useState(
    'Start with searching a GitHub user'
  );
  useEffect(() => {
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
    <>
      <div>{localIcon}</div>
      <div>{localText}</div>
    </>
  );
}

export default EmptyRouter;
