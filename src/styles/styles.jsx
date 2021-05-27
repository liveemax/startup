import styled from 'styled-components';

//Navbar

export const NavbarHeader = styled.header`
  background-color: ${(props) => props.theme.primary};
  font-size: 0.9rem;
  min-height: 72px;
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

export const NavbarGithub = styled.div`
  color: #fff;
  font-size: 40px;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const NavbarForm = styled.form`
  position: relative;
  width: 100%;
  height: 40px;
  margin-left: 1.5rem;
  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    color: ${(props) => props.theme.icons};
    font-size: 16px;
    transform: translate(0, -50%);
  }
  input {
    max-width: 500px;
    width: 100%;
    height: 20px;
    padding: 8px 14px 8px 30px;
    border-radius: 6px;
    border: none;
    outline: none;
  }
  @media (max-width: 960px) {
    max-width: 50%;
  }
`;

//App

export const AppContainer = styled.div`
  height: 100vh;
`;
export const AppSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: tomato;
  font-size: 50px;
  text-align: center;
`;

//Empty

export const EmptyContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.icons};
  font-size: 1.5rem;
  max-width: 243px;
  text-align: center;
  svg {
    font-size: 90px;
    margin-bottom: 20px;
  }
`;
export const EmptyText = styled.div`
  img {
    margin-bottom: 20px;
  }
`;

//User

export const UserMain = styled.main`
  margin: 40px 56px;
  height: calc(100vh - 120px);
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    margin: 10px;
  }
`;
export const UserAside = styled.aside`
  width: 20%;
  padding: 0 5px;
  min-width: 250px;
  img {
    border-radius: 100%;
    width: 100%;
  }
  a {
    color: ${(props) => props.theme.primary};
    font-size: 1.2rem;
    text-decoration: none;
  }
  @media (max-width: 960px) {
    margin: auto;
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
`;
export const UserAsideImg = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 28px 0 10px;
`;
export const UserAsideIcons = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 25px;
  svg {
    margin-right: 10px;
    color: ${(props) => props.theme.icons};
  }
`;
export const UserAsideContent = styled.div`
  width: calc(80% - 180px);
  position: relative;
  margin-left: 80px;
  @media (max-width: 960px) {
    width: 90%;
    margin: 20px 0 0;
  }
`;
export const UserRepos = styled.div`
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

    li:hover a,
    .active a {
      background-color: ${(props) => props.theme.primary};
      color: #fff;
      border-radius: 3px;
    }

    .next:hover a,
    .previous:hover a {
      background-color: transparent;
      color: ${(props) => props.theme.primary};
      border-radius: 3px;
    }
  }
`;

export const UserReposTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

export const UserItems = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-top: 30px;
`;

export const UserItem = styled.div`
  padding: 10px 0 0 32px;
  width: 95%;
  height: 100px;
  background-color: #fff;
  margin-bottom: 24px;
  overflow: auto;
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
`;
export const UserPagination = styled.div`
  color: ${(props) => props.theme.icons};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
