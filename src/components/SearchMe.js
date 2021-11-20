import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

function SearchMe(props) {
  return (
    <Nav>
      <form>
        <input type="text" placeholder="Search Music, Artists, MIxtapes" />
        <SearchLogo>
          <SearchIcon width="40px" type="submit" />
        </SearchLogo>
      </form>
    </Nav>
  );
}

export default SearchMe;

const Nav = styled.div`
  width: 100%;
  min-width: 250px;

  @media screen and (max-width: 768px) {
    transition: 0.2s all ease;
  }
  @media screen and (max-width: 668px) {
    transition: 0.2s all ease;
  }

  form {
    flex: 0.6;
    width: 100%;
    display: flex;
    padding: 0.1rem;
    margin: 0.1rem;
    border-radius: 3px;

    input {
      border: none;
      width: 100%;
      font-size: 1.7rem;
      height: 35px;
      font-weight: 400;
      background: #555;
      color: #fff;
      padding-left: 20px;
      border-radius: 7px;
      @media screen and (max-width: 768px) {
        transition: 0.2s all ease;
      }
      :hover {
        transform: scale(1);
        color: #222;
      }
      :focus {
        outline: none;
        box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

const SearchLogo = styled.div`
  font-size: 25px;
  position: absolute;
  align-items: center;
  margin-top: -5.6px;
  margin-left: 4px;
  transform: scale(1.2);
  color: gray;
  cursor: pointer;
  transition: 0.2s all ease;

  @media screen and (max-width: 768px) {
    font-size: 31px;
  }

  :hover {
    transform: scale(1.1);
    color: #555;
  }

  :active {
    transform: scale(1.3);
  }
`;
