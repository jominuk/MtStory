import styled from "styled-components";
import Scrolls from "../hooks/Scrolls";

const Skills = () => {
  const scrollPosition = 1100;
  const imageStyles = Scrolls(scrollPosition);

  return (
    <>
      <StTitle style={imageStyles}>skills</StTitle>
      <StSkills style={imageStyles}>
        <div className="skillGroup">
          <div>HTML5</div>
          <div>CSS3</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>React</div>
          <div>Redux-Toolkit</div>
          <div>React-Query</div>
          <div>SWR</div>
          <div>Socket.io</div>
        </div>

        <div className="my-skill">
          {[80, 80, 60, 30, 70, 60, 65, 50, 20].map((percentage, index) => (
            <div key={index}>
              {percentage}%
              <div className="graph" style={{ width: `${percentage}%` }}></div>
            </div>
          ))}
        </div>
      </StSkills>
    </>
  );
};

export default Skills;

const StTitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Phudu:wght@600;800&display=swap");
  font-family: "Phudu", cursive;
  font-size: 54px;
  font-weight: 800;
  margin: 100px 0 50px 0;
  color: rgb(68, 70, 73);
`;

const StSkills = styled.div`
  display: flex;
  width: 50%;
  height: 500px;
  margin: 0 auto;

  .skillGroup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      width: 150px;
      line-height: 35px;
      color: rgb(68, 70, 73);
      font-weight: 800;
      font-size: 15px;
    }
  }

  .my-skill {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    div {
      background: rgb(238 238 238);
      width: 95%;
      height: 35px;
      line-height: 35px;
      text-align: right;
      position: relative;
      overflow: hidden;
      border-radius: 10px 0 0 10px;
      padding-right: 10px;
    }

    .graph {
      background: rgb(0 161 167);
      height: 35px;
      position: absolute;
      top: 0;
      left: -100%;
      animation: slideIn 5s forwards 2s;
      border-radius: 0 10px 10px 0;
    }
  }

  @keyframes slideIn {
    to {
      left: 0;
    }
  }
`;
