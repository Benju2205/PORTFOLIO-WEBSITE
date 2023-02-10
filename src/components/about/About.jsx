import React from "react";
import "./about.css";
import Pexels from "../../img/pexels.jpg";
import Award from "../../img/award.jpg";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Pexels} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          deserunt iste accusantium. Illo quo suscipit quam? Fuga iure
          distinctio unde.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          eius iure eveniet, saepe reiciendis fugit laudantium fuga in accusamus
          magni quaerat ipsa inventore architecto eaque obcaecati soluta aperiam
          voluptas fugiat nesciunt earum nemo repellendus. Aspernatur voluptas,
          quia, corporis voluptatem distinctio sed excepturi harum voluptate
          quos nobis dolorem, tempora laboriosam animi!
        </p>
        <div className="a-award">
          <img src={Award} alt="award-img" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2022</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias vero omnis dolorum debitis suscipit deserunt, voluptas
              atque nostrum praesentium rem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
