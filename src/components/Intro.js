import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import { Sliderdb } from "./Sliderdb";

const Intro = () => {
  return (
    <Container>
      <ImgSlider slides={Sliderdb} />
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  background-color: lightgreen;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 60px;
    transition: 0.2s all ease;
  }
`;
