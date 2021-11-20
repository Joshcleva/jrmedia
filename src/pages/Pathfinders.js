import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Pathfindersdata from '../data/Pathfindersdata.json'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Pathfinders() {


    return (
        <div>
        <Navbar/>
            <Header/>
            <Navwrap>
        {Pathfindersdata.map((songDetail, index) => {
            return <Container>
                <a href="/">
        <Link to={`/songDetail/${index + 1}`}>
            <Nav>
        <ImageContainer>
            <img src={songDetail.image} alt=""/>
        </ImageContainer>
        <SongInfo>
        <Title>
            <h2>{songDetail.title}</h2>
        </Title>
        <DwnldSection>
            <Time>
                <h3>{songDetail.time}</h3>
            </Time>
            <Dvideo>
                <button>Download Video</button>
            </Dvideo>
            <Dmp3>
                <button>Download Mp3</button>
            </Dmp3>
        </DwnldSection>
        </SongInfo>
        </Nav>
        </Link>
        </a>
        <a href="/">
        <Link to={`/songDetail/${index + 1}`}>
        <Next>
            <NavigateNextIcon/>
        </Next>
        </Link>
        </a>
        </Container>
    })}
        </Navwrap>
        </div>
    )
}

export default Pathfinders;

const Navwrap = styled.div`
margin-top: 120px;
width: auto;
height: auto;

@media screen and (max-width: 768px) {
margin-top: 70px; 
}
`;

const Container = styled.div`
justify-content: space-between;
height: 105px;
width: 98%;
overflow: hidden;
align-items: center;
margin: 10px;
padding: 15px 15px 15px 15px;
padding-bottom: 12px;
background: #fff;
border-radius: 4px;
display: flex;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

&:hover {
    border-radius: 0.2rem;
    transition: 0.2s all ease;
    border-color: rgb(249, 249, 249, 0.8);
}
    @media screen and (max-width: 768px) {
        transition: 0.2s all ease;
        height: 85px;
        width: 94.6%;
    }
a {
text-decoration: none;
}
`;

const Nav = styled.div`
height: 105px;
width: 100%;
overflow: hidden;
align-items: center;
text-decoration: none;
background: #fff;
display: flex;

&:hover {
    border-radius: 0.2rem;
    transition: 0.2s all ease;
    border-color: rgb(249, 249, 249, 0.8);
}
    @media screen and (max-width: 768px) {
        transition: 0.2s all ease;
        height: 85px;
        width: 100%;
    }
`;

const ImageContainer = styled.div`
width: 150px;
height: 150px;
box-shadow: -4px 8px 15px 1 rgba(0, 0, 0, 0.1);
border-radius: 0.8rem;

@media screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
    }
    @media screen and (max-width: 468px) {
        transition: 0.2s all ease;
        width: 100px;
        height: 100px;

    }
img {
    height: 100%;
    object-fit: contain;
    width: 100%;
    cursor: pointer;
    display: relative;

    &:hover {
        transform: scale(1.1);
    }
    @media screen and (max-width: 768px) {
        transition: 0.2s all ease;
        object-fit: contain;
    }
}
`;

const SongInfo = styled.div`
    box-sizing: border-box;
`;

const Title = styled.div`
    text-decoration: none;

h2{
    font-size: 18px;
    text-decoration: none;
    padding-left: 14px;
    color: #000;
    @media screen and (max-width: 768px) {
        transition: 0.2s all ease;
        font-size: 15px;
        font-weight: 300;
        padding-left: 10px;
        align-items: center;
    }
    @media screen and (max-width: 468px) {
        transition: 0.2s all ease;
        font-size: 12px;
        padding-left: 8px;
    }
}
`;

const DwnldSection = styled.div`
display: flex;
margin-top: 10px;
gap: 10px;
align-items: center;

@media screen and (max-width: 768px) {
    margin-top: 0;
    gap: 5px;
    }

    @media screen and (max-width: 468px) {
        transition: 0.2s all ease;
        font-size: 10px;
        font-weight: 400;
    }
h3{
    font-size: 16px;
    padding-left: 10px;
    font-weight: 400;

    @media screen and (max-width: 768px) {
        transition: 0.2s all ease;
        font-size: 12px;
        button {
        font-size: 10px;
    }
    }
    
}
button {

        font-size: 12px;
        cursor: pointer;

        &:hover {
        background-color: #4b9c4f;
        border: 2px solid rgba(249, 249, 249, 0.1);
        transform: scale(1.1);
    }
        @media screen and (max-width: 768px) {
            font-size: 10px;
    }

    @media screen and (max-width: 280px) {
        transition: 0.2s all ease;
        font-size: 8px;
    }
    }
`;

const Time = styled.div`
border: 20px;
border-color: #000;
`;

const Dvideo = styled.div`
    cursor: pointer;

`;

const Dmp3 = styled.div`
    cursor: pointer;

`;

const Next = styled.div`
    cursor: pointer;
    align-items: center;
    color: #000;
@media screen and (min-width: 768px) {
        transition: 0.2s all ease;
        font-size: 15px;
    }
`;