import React, { useContext } from 'react';
import { Trigger } from '../App';
import EmptyRouter from '../components/EmptyRouter';
import { EmptyContainer } from '../styles/styles';

function Empty() {
    const {state,dispatch}=useContext(Trigger)
    return (
    <EmptyContainer>
      <EmptyRouter localRepos={state.localRepos}
                   localUser={state.localUser}
                   localPath={state.localPath}
                   notFound={state.notFound}
                   localIcon={state.localIcon}
                   localText={state.localText}
                   dispatch={dispatch}/>
    </EmptyContainer>
  );
}

export default Empty;
