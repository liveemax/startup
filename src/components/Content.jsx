import React, {useState} from 'react';
import RepositoriesEmpty from './RepositoriesEmpty';
import styled from 'styled-components';
import Repositories from './Repositories';


const ContentContainer = styled.div`
  width: calc(80% - 180px);
  position: relative;
  margin-left: 80px;
`;

function Content() {
    const repos=JSON.parse(sessionStorage.getItem("repos"))
    const [localReposSize,setLocalReposSize]=useState("")
    useState(()=>{
        if(repos.length===0)
        {
            setLocalReposSize(0)
        }
        else
        {
            setLocalReposSize(repos.length)
        }
    },[])
    const {public_repos,html_url}=repos||""
    return (
        <ContentContainer>
            <RepositoriesEmpty/>
            <Repositories/>
        </ContentContainer>
    );
}

export default Content;