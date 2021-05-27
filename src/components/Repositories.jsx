import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import PaginateItem from './PaginateItem';
import {
  UserItem,
  UserItems,
  UserPagination,
  UserRepos,
  UserReposTitle,
} from '../styles/styles';

const Repositories=React.memo((props)=> {
  const {localRepoPage,localRepos,localRepoSize,startRepos,endRepos,allPage,dispatch}=props
  useEffect(() => {
    const endReposBuffer = localRepoPage * localRepoSize - 1;
    dispatch({type:'setLocalStartRepos',startRepos:(localRepoPage - 1) * localRepoSize})
    dispatch({type:'setLocalEndRepos',endRepos:endReposBuffer <= localRepos.length
          ? endReposBuffer
          : localRepos.length - 1})
    dispatch({type:'setLocalAllPage',allPage:Math.abs(localRepos.length / localRepoSize)})
  }, [localRepoPage, localRepoSize]);
  const display =
    localRepos.length === 0 ? { display: 'none' } : { display: 'block' };
  return (
    <UserRepos style={display}>
      <UserReposTitle>Repositories ({`${localRepos.length}`})</UserReposTitle>
      <UserItems>
        {localRepos.length > 0
          ? localRepos.map((el, ind) => {
              const { name, svn_url, description } = el;
              if (ind >= startRepos && ind <= endRepos)
                return (
                  <UserItem key={name}>
                    <a href={svn_url} target="_blank" rel="noreferrer">
                      {name}
                    </a>
                    <p>{description}</p>
                  </UserItem>
                );
              return undefined;
            })
          : undefined}
      </UserItems>
      <UserPagination>
        <p>{`${startRepos + 1}-${endRepos + 1} of ${
          localRepos.length
        } items`}</p>
        <ReactPaginate
          previousLabel={<PaginateItem icon={faChevronLeft} />}
          nextLabel={<PaginateItem icon={faChevronRight} />}
          pageCount={allPage}
          onPageChange={(page) => {
            dispatch({type:'setLocalRepoPage',localRepoPage:page.selected + 1})
          }}
          initialPage={localRepoPage - 1}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          breakLabel="..."
          breakClassName="break-me"
          containerClassName="pagination"
          activeClassName="active"
        />
      </UserPagination>
    </UserRepos>
  );
})

export default Repositories;
