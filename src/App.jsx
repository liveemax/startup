import React, { useReducer } from 'react';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/Navbar';
import AppRoutes from './routers/AppRoutes';
import { AppContainer, AppSpinner } from './styles/styles';

export const Trigger = React.createContext({});

const initialState = {
  searchInput: '',
  localPath: `${process.env.REACT_APP_HOME_ROUTE}`,
  localSpinner: false,
  localUser: {},
  localRepos: [],
  notFound: 'Not Found',
  localRepoPage: 1,
  localRepoSize: 4,
  startRepos: 0,
  endRepos: 0,
  allPage: 0,
  localIcon: <FontAwesomeIcon icon={faSearch} />,
  localText: 'Start with searching a GitHub user',
};

function reducer(state, action) {
  switch (action.type) {
    case 'setSearchInput':
      return { ...state, searchInput: action.searchInput };
    case 'setLocalPath':
      return { ...state, localPath: action.localPath };
    case 'setLocalSpinner':
      return { ...state, localSpinner: action.localSpinner };
    case 'setLocalUser':
      return { ...state, localUser: action.localUser };
    case 'setLocalRepos':
      return { ...state, localRepos: action.localRepos };
    case 'setLocalRepoPage':
      return { ...state, localRepoPage: action.localRepoPage };
    case 'setLocalRepoSize':
      return { ...state, localRepoSize: action.localRepoSize };
    case 'setLocalStartRepos':
      return { ...state, startRepos: action.startRepos };
    case 'setLocalEndRepos':
      return { ...state, endRepos: action.endRepos };
    case 'setLocalAllPage':
      return { ...state, allPage: action.allPage };
    case 'setLocalIcon':
      return { ...state, localIcon: action.localIcon };
    case 'setLocalText':
      return { ...state, localText: action.localText };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContainer>
      <Trigger.Provider
        value={{
            state,
            dispatch
        }}>
        <Navbar dispatch={dispatch} notFound={state.notFound} localPath={state.localPath} searchInput={state.searchInput}/>
        {state.localSpinner ? (
          <AppSpinner>
            <FontAwesomeIcon icon={faSpinner} spin />
          </AppSpinner>
        ) : (
          <AppRoutes />
        )}
      </Trigger.Provider>
    </AppContainer>
  );
}

export default App;
