import styled from "styled-components";
import Ezip from "./projects/Ezip";
import Slack from "./projects/Slack";
import Scrolls from "../hooks/Scrolls";

const Projects = () => {
  const scrollPosition = 2800;
  const imageStyles = Scrolls(scrollPosition);

  return (
    <>
      <div style={imageStyles}>
        <StTitle>projects</StTitle>

        <StProject>
          <div className="ProjectBox">
            <Ezip />

            <Slack />
          </div>

          <div className="ProjectBox">
            <Ezip />

            <Slack />
          </div>
        </StProject>
      </div>
    </>
  );
};

export default Projects;

const StTitle = styled.div`
  font-size: 54px;
  font-weight: 800;
  margin-bottom: 80px;
  color: rgba(0, 0, 0, 0.6);
`;

const StProject = styled.div`
  @media screen and (min-width: 1450px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    margin: 0 auto;
  }

  @media screen and (max-width: 1449px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
