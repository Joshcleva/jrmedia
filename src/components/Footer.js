import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Header>
        <NavLink to="/">
          <h2>Explore the ta8Beats.com</h2>
        </NavLink>
      </Header>
      <NavFooter>
        <ul>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/privacy">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="/terms">Term Of Services</NavLink>
          </li>
        </ul>
      </NavFooter>
      <Rights>
        <span>
          Copyright © 2021 ta8beats.com Discover, stream & Listen Now.
        </span>
        <p>
          <NavLink to="/jcp">
            Created and Designed by Josh Creative Programer from Kw-Software
            Company
          </NavLink>
        </p>
      </Rights>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: lightskyblue;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    transition: 0.2s all ease;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  h2 {
    font-size: 25px;
    text-decoration: none;
    font-weight: 280;
  }
`;

const NavFooter = styled.div`
  display: flex;
  padding: 20px;
  font-weight: 300;
  font-size: 15px;
  justify-content: center;
  ul {
    text-decoration: none;
    color: #fff;
    list-style: none;
    a {
      text-decoration: none;
      display: flex;
      color: #fff;
      justify-content: center;
      list-style: none;

      &:hover {
        background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
        transform: translateY(-0.2rem) scale(1.02);
        color: #000;
      }
      &:active {
        transform: translateY(0.3rem);
      }
    }
  }
`;

const Rights = styled.div`
  font-weight: 300;
  padding: 20px;
  text-align: center;
  font-size: 12px;
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 300;
    font-size: 12px;
  }
`;
