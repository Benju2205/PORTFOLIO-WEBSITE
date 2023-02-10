import React from "react";
import "./intro.css";
import Me from "../../img/me.png"

const Intro = () => {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-intro">Hello, my name is</h1>
          <h1 className="i-name">C.Benjamin</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">Writer</div>
                <div className="i-title-item">Content creator</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quibusdam dolor. Corporis non voluptates ipsa consequuntur illo! Quae, error asperiores.
          </p>
        </div>
        {/* <svg
            width='75'
            height='75'
            viewBox='0 0 75 75'
            fill='none'
            stroke='black'
            className='i-scroll'
            xmlns="http://www.w3.org/2000/svg"
            >
                <g id="scroll">
                    <path
                        id="Vector"
                        d="M40.5 15L34.5 9L28.5 15"

                </g>

            </svg> */}
      </div>
      <div className="i-right">
        <div className="i-bg">
        <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
