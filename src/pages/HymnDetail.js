import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import Hymndb from '../data/Hymndb.json';
function HymnDetail() {

    const {id} = useParams();


    return ( 
    <div>
        <ImageContainer>
                <img src={Hymndb[id-1].image} alt="ChoirImg"/>
            </ImageContainer>
            <Container>
            <h1>{Hymndb[id-1].choir}</h1>
        <SongInfo>
            <img src={Hymndb[id-1].image1} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song1}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image2} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song2}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image3} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song3}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image4} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song4}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image5} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song5}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image6} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song6}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image7} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song7}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image8} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song8}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image9} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song9}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image10} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song10}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image11} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song11}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image12} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song12}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image13} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song13}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image14} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song14}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image15} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song15}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image16} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song16}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image17} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song17}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image18} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song18}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image19} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song19}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        <SongInfo>
            <img src={Hymndb[id-1].image20} alt="ChoirImg"/>
            <h3>{Hymndb[id-1].song20}</h3> 
            <Flex>
                <div>
            <button>Download Video</button>
            </div>
                <div>
            <button>Download Audio</button>
                </div>
            </Flex>
        </SongInfo>
        </Container>
        </div>
    )
}

export default HymnDetail;

const Container = styled.div`
height: auto;
width: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    font-size: 25px;
    text-decoration: none;
    padding-left: 20px;
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

h2{
    font-size: 18px;
    text-decoration: none;
    padding-left: 20px;
    color: #000;
    @media screen and (max-width: 768px) {
        transition: 0.2s all ease;
        font-size: 13px;
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

const ImageContainer = styled.div`
img {
    height: 250px;
    width: 100%;
    display: relative;
    object-fit: cover;
}
`;

const SongInfo = styled.div`
    justify-content: flex-start;
    height: 60px;
    max-height: 100px;
    width: 60%;
    gap:10px;
    align-items: center;
    margin: 10px;
    margin-bottom: 20px;
    display: flex;
    text-decoration: none;
    padding: 7px;
    background: #fff;
    border-radius: 4px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    @media screen and (max-width: 768px) {
        transition: 0.2s all ease;
        width: 80%;
        height: 70px;
        gap: 5px;
    }
    img {
    height: 100px;
    object-fit: contain;
    border-radius: 6px;
    width: 100px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
}

h3{
    font-size: 15px;
    font-weight: 350;

    @media screen and (max-width: 768px) {
        transition: 0.2s all ease;
        font-weight: 300;
        font-size: 13px;
    }
}
button {

        font-size: 12px;
        cursor: pointer;
        justify-content: center;

        &:hover {
        background-color: #4b9c4f;
        border: 2px solid rgba(249, 249, 249, 0.1);
        transform: scale(1.1);
    }
        @media screen and (max-width: 768px) {
            font-size: 9px;
    }

    @media screen and (max-width: 280px) {
        transition: 0.2s all ease;
        font-size: 8px;
    }
}
`;

const Flex = styled.div`

`;

