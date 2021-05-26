import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import PaginateItem from './PaginateItem';

const Repos = styled.div`
  .pagination {
    list-style: none;
    display: flex;
    li {
      margin-left: 5px;
    }

    li a {
      width: 20px;
      height: 25px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    li:hover a, .active a {
      background-color: ${props => props.theme.primary};
      color: #fff;
      border-radius: 3px;
    }

    .next:hover, .previous:hover {
      background-color: transparent;
      color: ${props => props.theme.primary};
      border-radius: 3px;
    }
  }
`

const PaginationContainer = styled.div`
  color: ${props => props.theme.icons};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const ReposTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
`
const ItemsContainer = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-top: 30px;
  overflow: hidden;
`

const Items = styled.div`
  padding: 10px 0 0 32px;
  width: 100%;
  height: 100px;
  background-color: #fff;
  margin-bottom: 24px;

  a {
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-top: 16px;
  }
`


function Repositories() {
    let repos = JSON.parse(sessionStorage.getItem("repos")) || ""
    const [localRepoPage, setLocalRepoPage] = useState(1)
    const [localRepoSize, setLocalRepoSize] = useState(3)
    const [startRepos, setLocalStartRepos] = useState(0)
    const [endRepos, setLocalEndRepos] = useState(0)
    const [allPage, setLocalAllPage] = useState(0)
    useEffect(() => {
        const endRepos=localRepoPage * localRepoSize - 1
        setLocalStartRepos((localRepoPage - 1) * localRepoSize)
        setLocalEndRepos(endRepos<=repos.length?endRepos:repos.length-1)
        setLocalAllPage(Math.abs(repos.length / localRepoSize))
    }, [localRepoPage, localRepoSize])
    let display = {display: "block"}
    if (repos.length === 0)
        display = {display: "none"}
    if (repos.message === "Not Found")
        repos = []
    return (
        <Repos style={display}>
            <ReposTitle>
                Repositories ({`${repos.length}`})
            </ReposTitle>
            <ItemsContainer>
                {repos.map((el, ind) => {
                    const {name, svn_url, description} = el
                    if (ind >= startRepos && ind <= endRepos)
                        return (<Items key={name}>
                            <a href={svn_url} target={"_blank"}>{name}</a>
                            <p>{description}</p>
                        </Items>)
                })}
            </ItemsContainer>
            <PaginationContainer>
                <p>{`${startRepos+1}-${endRepos+1} of ${repos.length} items`}</p>
                <ReactPaginate
                    previousLabel={<PaginateItem icon={faChevronLeft}/>}
                    nextLabel={<PaginateItem icon={faChevronRight}/>}
                    pageCount={allPage}
                    onPageChange={(page) => {
                        setLocalRepoPage(page.selected + 1)
                    }}
                    initialPage={localRepoPage - 1}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </PaginationContainer>
        </Repos>
    );
}

export default Repositories;