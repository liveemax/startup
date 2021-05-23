import styled, {css} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';

const Header = styled.header`
  background-color: ${props => props.theme.primary};
  font-size: 0.9rem;
  min-height: 72px;
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

const Github = styled.div`
    color:#fff;
    font-size: 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Form=styled.form`
  position: relative;
  width: 100%;
  height: 40px;
  margin-left: 1.5rem;
  svg{
      position: absolute;
      top:50%;
      left: 10px;
      color:${props=>props.theme.icons};
      font-size: 16px;
    transform: translate(0,-50%);
  }
  input{
    max-width: 500px;
    width: 100%;
    height: 20px;
    padding: 8px 14px 8px 30px;
    border-radius: 6px;
    border: none;
    outline: none;
  }
  @media (max-width: 768px) {
    max-width: 50%;
  }
`;

const Navbar = () => {
    let [searchInput,setSearchInput]=useState("")
    return (
        <Header>
            <Github>
                <FontAwesomeIcon icon={faGithub}/>
            </Github>
            <Form>
                <label>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input onChange={(e)=>{
                        setSearchInput(e.currentTarget.value)
                        }} id="search" type="text" value={searchInput}/>
                </label>
            </Form>
        </Header>
    )
}

export default Navbar
