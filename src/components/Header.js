import React, {useState} from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Search from "./Search";
import { MdAccountCircle } from "react-icons/md";
import SearchIcon from "@material-ui/icons/Search";
import { FaTimes } from "react-icons/fa";

const Header = () => {

    const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLinks to="/">
          <NavLogo>
            <img src="/images/t8beatsLogo.png" alt="/" />
            <a href="/">ta8beats</a>
          </NavLogo>
        </NavLinks>
        <NavMenu>
          <Search />
          <NavItem>
            <NavLinks to="/sign">SignUp</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/sign">
              SignIn
              <Icon>
                <MdAccountCircle />
              </Icon>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="sign">
              <Button>Upload</Button>
            </NavLinks>
          </NavItem>
        </NavMenu>
        <SearchInput clicked={click}>
          <input type="text" placeholder="Search" />
          <CloseIcon onClick={closeMobileMenu} />
        </SearchInput>
        <NavIcon>
          <SearchIcon clicked={click} onClick={() => handleClick()} />
          <MdAccountCircle />
        </NavIcon>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 60px;
  display: flex;
  background: url("/images/bgDark.jpg") center center / cover no-repeat fixed;
  font-size: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    justify-content: space-between;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  gap: 30px;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    justify-content: space-between;
  }
`;

const NavLogo = styled(LinkR)`
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 25px;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  img {
    width: 30px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
  }
`;

const Button = styled.div`
  background: orange;
  border-radius: 50px;
  border-width: 1;
  padding: 5px;
  margin-left: 30px;
  margin-top: 5px;
  transition: 0.2s all ease;
  box-shadow: 0px 13px 24px -7px #1e90ff;
  outline: none;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
    transform: translateY(-0.2rem) scale(1.02);
    color: #000;
  }
  &:active {
    transform: translateY(0.3rem);
  }
`;

const Icon = styled.i`
  margin-left: 10px;
  margin-top: 4px;
  font-size: 30px;
  align-items: center;
`;

const SearchInput = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  width: 100%;

  @media screen and (min-width: 960px) {
    display: none;
  }
  justify-content: center;
  align-items: center;
  position: absolute;
  input {
    width: 80%;
    border-radius: 50px;
    padding: 0.5rem;
    border: none;
    font-weight: 500;
    background: #999;
    color: #fff;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #333;
  position: absolute;
  margin-left: 250px;
  transition: all 0.8s ease-in-out;

  @media screen and (max-width: 1024px) {
    margin-left: 780px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 570px;
  }
  @media screen and (max-width: 540px) {
    margin-left: 380px;
  }
  @media screen and (max-width: 414px) {
    margin-left: 280px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 250px;
  }
  @media screen and (max-width: 280px) {
    margin-left: 180px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 200px;
  }
  @media screen and (max-width: 280px) {
    margin-left: 180px;
  }
`;

const NavIcon = styled.i`
  align-items: center;
  font-size: 30px;
  gap: 10px;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  align-items: center;
  height: 60px;
`;

const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  padding: 0.5rem;
  font-size: 18px;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
    border-radius: 50px;
  }
`;
