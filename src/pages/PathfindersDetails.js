import React from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import Pathfindersdata from '../data/Pathfindersdata.json';

const PathfindersDetails=(props)=>{

    const {id} = useParams();

    return (
        <div>
        <ImageContainer>
                <img src={Pathfindersdata[id-1].image} alt="ChoirImg"/>
        </ImageContainer>
        <Container>
            
            <Nav>
        <SongInfo>
            <img src={Pathfindersdata[id-1].image1} alt="ChoirImg"/>
            <h3>{Pathfindersdata[id-1].song1}</h3>
        <DwnldSection>
            <Dvideo>
                <button>Download Video</button>
            </Dvideo>
            <Dmp3>
                <button>Download Mp3</button>
            </Dmp3>
        </DwnldSection>
        </SongInfo>
        </Nav>
        </Container>
        </div>
    )
}

export default PathfindersDetails;

const Container = styled.div`
height: auto;
width: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Nav = styled.div`
height: 450px;
width: 500px;
margin: 20px;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
/* background: gray; */
`;

const ImageContainer = styled.div`

img {
    height: 250px;
    width: 100%;
    display: relative;
    object-fit: cover;
}
`;

const SongInfo = styled.div`
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    img {
    height: 250px;
    width: 300px;
    object-fit: cover;
    border-radius: 200px;
}

h3{
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
justify-content: center;
justify-content: center;
align-items: center;
flex-direction: column;

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

const Dvideo = styled.div`
    cursor: pointer;

`;

const Dmp3 = styled.div`
    cursor: pointer;

`;
