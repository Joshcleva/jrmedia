import React from 'react';
import styled from 'styled-components';
import Intro from '../components/Intro';
import Newhot from '../components/Newhot';
import Radio from '../components/Radio';


function Home() {


    return (
        <Container>
            <Intro/>
            <Radio/>
            <Newhot/>
        </Container>
    )
}

export default Home;

const Container = styled.div`
background-color: lightgray;
`;