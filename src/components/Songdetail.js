import React from "react";
import styled from "styled-components";

const Songdetail = () => {
  return (
    <Container>
      song Detail
      <img src="/images/sda_y.jpg" alt="pic" />
    </Container>
  );
};

export default Songdetail;

const Container = styled.div`
  height: 300px;
  background: url("/images/dark.jpg") center center / cover no-repeat fixed;
  margin-top: 60px;
  width: 100%;
  margin-bottom: 50px;
  justify-content: center;
  img {
    justify-content: center;
    height: 300px;
    width: 100%;
    margin-top: 10px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    transition: 0.2s all ease;
  }
`;
