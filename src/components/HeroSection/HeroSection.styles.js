import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const Hero = styled(`div`)`
    background-color: var(--color-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);   
        z-index: 2; 
    }
`;

export const Hero__Bg = styled(`div`)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Video__Bg= styled(`video`)`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const Hero__Content = styled(`div`)`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Hero__H1 = styled(`h1`)`
    color: var(--color-light);
    font-size: 4.8rem;
    text-align: center;
    
    @media screen and (max-width: 768px) {
      font-size: 4rem
    }
    
    @media screen and (max-width: 480px) {
      font-size: 3.2rem;
    }
`;

export const Hero__P = styled(`p`)`
    margin-top: 24px;
    color: var(--color-light);
    text-align: center;
    max-width: 600px;
    
    @media screen and (max-width: 768px) {
      font-size: 2.4rem;
    }
    
    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
`;

export const Hero__BtnWrapper = styled(`div`)`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 2rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 2rem;
`;
