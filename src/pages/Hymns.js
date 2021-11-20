import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hymnsongs from '../data/Hymnsongs.json';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Hymns() {
    return (
        <NavWrap>
        <Navbar/>
            <Header/>
        {Hymnsongs.map((hymnDetail, index) => {
            return <>
            <Nav key={hymnDetail.id}>
                <a href="/">
            <Link to={`/hymndetail/${index + 1}`}>
            <Container>
            <CardImg>
                <img src={hymnDetail.image} alt="img"/>
            </CardImg>
            <About>
                <h2>
                {hymnDetail.language}
                </h2>
                <h3>
                {hymnDetail.totalnumber}
                </h3>
                <p>{hymnDetail.choir}</p>
            </About>
                <Download>
                    <button>Download</button>
                </Download>
        </Container>
        </Link>
        </a>
        </Nav>
        </>
        })}
        </NavWrap>
    )
}

export default Hymns;

const NavWrap = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin-top: 120px;

    @media screen and (max-width: 768px) {
    margin-top: 60px; 
    }
`;


const Nav = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-flow: column;
    a {
    text-decoration: none;
    color: #111;
    }
`;

const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 350px; 
    position: relative;
    margin: 15px;
    height: 370px;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;

    @media screen and (max-width: 768px) {
    width: 150px; 
    margin: 15px;
    height: 200px;
    }

`;

const CardImg = styled.div`
height: 80%;
padding: 5px;
cursor: pointer;

img {
    height: 90%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: all 0.2s linear;
    &:hover {
    transform: scale(1.1);
    }
}
`;

const About = styled.div`
    backdrop-filter: blur(10px);
    width: 340px; 
    padding:5px;
    background: #dadada;
    margin-top: -12px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 40%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    h2{
        font-size: 25px;
        font-weight: 400;
    }

    h3{
        font-size: 20px;
        font-weight: 300;
    }
    p {
        font-size: 16px;
        font-weight: 250;
    }

    @media screen and (max-width: 768px) {
        width: 140px; 
        h2{
        font-size: 13px;
        font-weight: 400;
    }

    h3{
        font-size: 10px;
        font-weight: 300;
    }
    p {
        font-size: 8px;
        font-weight: 250;
    }
    }
`;

const Download = styled.div`
button{
        padding: 2px;
        border: none;
        background-color: rgb(2, 2, 110);
        font-weight: 500;
        font-size: 15px;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        :hover {
            background-color: rgb(0, 0, 196);
        }
}
`;
