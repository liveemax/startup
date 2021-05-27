import React, {useContext} from 'react';
import Repositories from './Repositories';
import { UserAsideContent } from '../styles/styles';
import Empty from '../pages/Empty';
import {Trigger} from '../App';

function Content() {
    const {state,dispatch}=useContext(Trigger)
  return (
    <UserAsideContent>
      <Empty />
      <Repositories
          dispatch={dispatch}
          localRepos={state.localRepos}
          localRepoSize={state.localRepoSize}
          localRepoPage={state.localRepoPage}
          startRepos={state.startRepos}
          endRepos={state.endRepos}
          allPage={state.allPage}/>
    </UserAsideContent>
  );
}

export default Content;
