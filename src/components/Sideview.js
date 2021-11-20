import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "../GlobalStyles";
// import { TextField } from '@material-ui/core';

const Sideview = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <NavbuttonX>
        <ButtonX clicked={click} onClick={() => handleClick()}>
          Click
        </ButtonX>
      </NavbuttonX>
      <Nav clicked={click}>
        <NavbarContainer>
          <NavMenu onClick={closeMobileMenu}>
            <NavItem>
              <NavLinks to="/">
                <SearchIcon />
                Explore
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/newhot">
                <SearchIcon />
                Latest
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/popular">
                <SearchIcon />
                Popular
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/artist">
                <SearchIcon />
                Artists
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/upload">
                <SearchIcon />
                Upload
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/signup">
                <SearchIcon />
                Register
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/signup">
                <SearchIcon />
                Login
              </NavLinks>
            </NavItem>
          </NavMenu>
          <Adverts>
            <h4>Advertise with us here today</h4>
            <p>
              Grow up your business by advertising with us today and sell your
              business across the whole world. call us on 0772951826. Or
            </p>

            <button>Email Us</button>
          </Adverts>

          <Button>Shop with us</Button>
          {/* <TextField
                        variant="standard"
                        type="date"
                        /> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Sideview;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  background: url("/images/bgDark.jpg") center center / cover no-repeat fixed;
  margin-top: 60px;
  flex-direction: column;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: 0.8s ease-in-out;

  display: ${(props) => (props.clicked ? "flex" : "none")};

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
  }
`;

const NavbuttonX = styled.div`
  position: fixed;
  margin-top: -60px;
  z-index: 10;
`;

const ButtonX = styled.button`
  background-color: black;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: #fff;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.8s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  z-index: 1;
  width: 190px;
  padding: 0 15px;
  gap: 30px;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;
  gap: 10px;
  width: 100%;
  transition: 0.2s all ease;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    transition: 0.3s all ease;
  }
`;

const NavItem = styled.li`
  align-items: center;
  width: 100%;

`;

const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  width: ${(props) => (props.clicked ? "20%" : "0")};

  &.active {
    border-bottom: 3px solid rgb(126, 253, 45);
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ primary }) => (primary ? "#888" : "#333")};
    transform: scale(1.05);
  }
`;

const Adverts = styled.div`
  background: #777;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  border-radius: 5px;
  border-width: 1;
  padding: 10px;
  transition: 0.2s all ease;
  box-shadow: 0px 13px 24px -7px #1e90ff;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ primary }) => (primary ? "#888" : "#333")};
    transform: scale(1.1);

    h4 {
      font-size: 17px;
      transform: scale(1.1);
      font-weight: 400;
    }

    p {
      font-size: 12px;
      letter-spacing: 0.2px;
      transform: scale(1.1);
      font-weight: 300;
      margin-top: 10px;
    }
  }

  h4 {
    font-size: 20px;
    font-weight: 350;
  }

  p {
    font-size: 12px;
    font-weight: 300;
  }

  button {
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
  }
`;
