import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {IoMdArrowRoundForward} from 'react-icons/io';
// import {IoArrowForward, IoArrowBack} from 'react-icons/io5';

const Intro = ({slides}) => {

const [current, setCurrent] = useState(0)
const length = slides.length
const timeout = useRef(null)

useEffect(() => {
    const nextSlide = () => {
        setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }

    timeout.current = setTimeout(nextSlide, 3000)

    return function () {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
    }

}, [current, length]
);

// const nextSlide = () => {
//     if(timeout.current) {
//         clearTimeout(timeout.current)
//     }

//     setCurrent(current === length - 1 ? 0 : current + 1)

// };

// const PrevSlide = () => {
//     if(timeout.current) {
//         clearTimeout(timeout.current)
//     }

//     setCurrent(current === 0 ? length - 1 : current - 1)

// };

if(!Array.isArray(slides) || slides.length <= 0) {
    return null
}

    return (
        <IntroSection>
            <IntroWrapper>
                {slides.map((slide, index) => {
                    return ( 
                            <IntroSlide key={index}>
                                {index === current && (
                                     <IntroSlider>
                                     <IntroImg img src={slide.image} 
                                         alt="pic"/>
                                     <IntroContent>
                                         <h1>{slide.heading}</h1>
                                         <p>{slide.desc}</p>
                                         <Button 
                                         to={slide.path} >
                                             <h3>{slide.label}</h3>
                                         <Arrow />
                                         </Button>
                                     </IntroContent>
                                     </IntroSlider>
                                )}
                        </IntroSlide>
                    )
                    })}
            </IntroWrapper>
            {/* <SliderButtons>
                <PrevArrow  onClick={PrevSlide} />
                <NextArrow  onClick={nextSlide} />
            </SliderButtons> */}
        </IntroSection>
    )
}

export default Intro;

const IntroSection = styled.section`
  height: 300px;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const IntroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const IntroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;

`;

const IntroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
        0deg, 
        rgba(0, 0, 0, 0.2) 0%, 
        rgba(0, 0, 0, 0.4) 50%, 
        rgba(0, 0, 0, 0.6) 100%,);
}
`;

const IntroImg = styled.img`
position: absolute;
left: 0;
width: 100vw;
height: 100vh;
display: block; 
object-fit: cover;
`;

const IntroContent = styled.div`
position: absolute;
z-index: 10;
display: flex;
flex-direction: column;
color: #fff;
left: 10px;
bottom: 10px;
padding: 1rem;
backdrop-filter: blur(3px);
background-color: rgba(0, 0, 0, 0.15);
border-radius: 10px;
max-width: 360px;
h1 {
    font-size: 1.1rem;
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}

p {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
}
`;




const Button = styled.div`
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    color: #000;
    padding: 10px;
    background: #ffb347;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-items: center;
    outline: none;
    display: flex;
    max-width: 100px;
    height: 20px;
    &:hover {
    transition: scale(1.2);
}

    h3 {
    font-size: 0.5rem;
}

`;


const Arrow = styled(IoMdArrowRoundForward)`
width: 20px;
height: 20px;
color: #fff;
cursor: pointer;
transition: 0.5s;

&:hover {
    transition: scale(1.2);
}
@media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
}
`;

// const SliderButtons = styled.div`
// position: absolute;
// bottom: 10px;
// right: 10px;
// display: flex;
// z-index: 10;
// `;


// const PrevArrow = styled(IoArrowBack)`
// width: 50px;
// height: 50px;
// color: #fff;
// cursor: pointer;
// background: #000d1a;
// border-radius: 50px;
// padding: 10px;
// margin-right: 1rem;
// user-select: none;
// transition: 0.3s;

// &:hover {
//     background: #cd853f;
//     transition: scale(1.1);
// }
//     @media screen and (max-width: 768px) {
//     width: 20px;
//     height: 20px;

// }
// `;

// const NextArrow = styled(IoArrowForward)`
// width: 50px;
// height: 50px;
// color: #fff;
// cursor: pointer;
// background: #000d1a;
// border-radius: 50px;
// padding: 10px;
// margin-right: 1rem;
// user-select: none;
// transition: 0.3s;

// &:hover {
//     background: #cd853f;
//     transition: scale(1.1);
// }

// @media screen and (max-width: 768px) {
//     width: 20px;
//     height: 20px;
// }
// `;