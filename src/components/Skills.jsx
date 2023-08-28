import styled from "styled-components";

const Skills = () => {
  return (
    <>
      <StTitle>skills</StTitle>
      <StSkills>
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
          <div>
            80%
            <div className="graph" style={{ width: "80%" }}></div>
          </div>
          <div>
            80%
            <div className="graph" style={{ width: "80%" }}></div>
          </div>
          <div>
            60%
            <div className="graph" style={{ width: "60%" }}></div>
          </div>
          <div>
            30%
            <div className="graph" style={{ width: "30%" }}></div>
          </div>
          <div>
            70%
            <div className="graph" style={{ width: "70%" }}></div>
          </div>
          <div>
            60%
            <div className="graph" style={{ width: "60%" }}></div>
          </div>
          <div>
            65%
            <div className="graph" style={{ width: "65%" }}></div>
          </div>
          <div>
            50%
            <div className="graph" style={{ width: "50%" }}></div>
          </div>
          <div>
            20%
            <div className="graph" style={{ width: "20%" }}></div>
          </div>
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
