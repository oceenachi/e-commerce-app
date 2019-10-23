import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Largephone from "../assets/largephone.png";
import Styled from "styled-components";

function Headerbody () {
    const WrapperDiv = Styled.div`
        background-image: linear-gradient(63deg, #ff4858 -25%, #8f65ff 118%);
    `;
    const HeaderParagraph = Styled.p`
    text-align: justify;
    text-justify: inter-word;
    `;

    const HeaderDiv = Styled.div`
        display: flex;
        justify-content: center;
        max-width: 1139px;
        margin: 0 auto;
        align-items: center;
        color: white;
        font-size: 0.8rem;  
    `;
    const PaddedDiv = Styled.div`
        padding: 0 15px;
        margin: 0 20px;
        color: black;
    `;



    return (
        <React.Fragment>
            <WrapperDiv>
                <HeaderDiv>
                    <PaddedDiv>
                        <FaChevronLeft size="20px" />
                    </PaddedDiv>
                    <div className="header-left">
                        <h2>iPhone X</h2><br/>
                        <HeaderParagraph>
                        Lorem ipsum dolor sit amet, in has solum timeam nostrud, prompta verterem expetendis vim an. Eos novum consulatu cotidieque ei, clita corrumpit suscipiantur eu mei. Mea semper copiosae in, pri regione facilisis te
                        </HeaderParagraph><br/>
                        <a href="#">MORE</a>       
                    </div>
                    <div className="header-right">
                        <img src={Largephone} alt="largephone" />
                    </div>
                    <PaddedDiv>
                        <FaChevronRight size="20px" />
                    </PaddedDiv>

                </HeaderDiv>
               
            </WrapperDiv>
        </React.Fragment>
    )

}

export default Headerbody;