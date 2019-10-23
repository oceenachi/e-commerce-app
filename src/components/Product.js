import React from "react";
import Styled from "styled-components";
import phone from "../assets/pic.png";
import oculus from "../assets/Oculus-Rift-profile_grande.png";
import camera from "../assets/camera.png";

function SampleProducts() {
  const SampleProductDiv = Styled.div`
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: center;
        border: 1px black solid;

    `;
  const Parent = Styled.div`        
        position: relative;
        top: -50px;

    `;

  const SampleProduct = Styled.div`
        width: 390px;
        height: 280px;
        background: #ff6875;
        color:white;
        padding: 20px 0 0 15px;
        overflow: hidden;
        font-size: 0.9rem;
    
    `;
  const SampleProduct2 = Styled(SampleProduct)`
        overflow: visible;
        background: white;
        color:black;
        display: block;
        padding: 0;
        font-size: 1rem;
        
        
    `;
  const SampleProduct3 = Styled(SampleProduct)`
        background: #c1c8ce;
        color: black;
    
    `;

  return (
    <React.Fragment>
      <Parent>
        <SampleProductDiv>
          <SampleProduct>
            <div className="product1">
              <h4>iPhone 6</h4>
              <br />
              <p>Lorem ipsum dolor sit amet, in has solum timeam nostrud</p>
              <br />
              <p>$399</p>
            </div>
            <img src={phone} alt="iphone" className="img1" />
          </SampleProduct>

          <SampleProduct2 white>
            <img src={oculus} alt="oculus" className="img2" />
            <div className="product2">
              <h4>Oculus Rift</h4>
              <p>$349</p>
            </div>
          </SampleProduct2>
          <SampleProduct3>
            <div className="product3">
              <h4>GoPro Hero 6</h4>
              <br />
              <p>Lorem ipsum dolor sit amet, in has solum timeam nostrud</p>
              <br />
              <p>$299</p>
            </div>
            <img src={camera} alt="camera" className="img3" />
          </SampleProduct3>
        </SampleProductDiv>
      </Parent>
    </React.Fragment>
  );
}

export default SampleProducts;
