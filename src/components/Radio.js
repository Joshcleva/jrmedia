import React from 'react';
import styled from 'styled-components';


const Radio = () => {
    return (
        <Container>
            <img src="/images/sda_y.jpg" alt="pic" />
        </Container>
    )
}

export default Radio

const Container = styled.div`
  height: 300px;
  background: url("/images/dark.jpg") center center / cover no-repeat fixed;
  width: 100%;
  justify-content: center;
  img {
    justify-content: center;
    height: 300px;
    width: 100%;
    margin-top: 5px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    transition: 0.2s all ease;
  }
`;