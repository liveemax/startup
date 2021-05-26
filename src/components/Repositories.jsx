import React, {useState} from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const Repos = styled.div`
    .pagination{
      list-style: none;
    }
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
  p{
    font-size: 16px;
    font-weight: 400;
    margin-top: 16px;
  }
`


function Repositories() {
    const repos = JSON.parse(sessionStorage.getItem("repos")) || ""
    const [localRepoPage,setLocalRepoPage]=useState(1)
    const [localRepoSize,setLocalRepoSize]=useState(3)
    const startRepos=(localRepoPage-1)*localRepoSize
    const endRepos=localRepoPage*localRepoSize-1
    return (
        <Repos>
            <ReposTitle>
                Repositories ({`${repos.length}`})
            </ReposTitle>
            <ItemsContainer>
                {repos.map((el,ind) => {
                    const {name, svn_url, description} = el
                    if(ind>=startRepos && ind<=endRepos)
                    return (<Items key={name}>
                        <a href={svn_url} target={"_blank"}>{name}</a>
                        <p>{description}</p>
                    </Items>)
                })}
            </ItemsContainer>
            <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={repos.length}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
        </Repos>
    );
}

export default Repositories;