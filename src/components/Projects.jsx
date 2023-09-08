import styled from "styled-components";

import Scrolls from "../hooks/Scrolls";

import Ezip from "./projects/Ezip";
import Ueat from "./projects/Ueat";
import Ai from "./projects/Ai";

const Projects = () => {
  const scrollPosition = 2800;
  const imageStyles = Scrolls(scrollPosition);

  return (
    <>
      <div style={imageStyles}>
        <StTitle>projects</StTitle>

        <StProject>
          <div className="row">
            <CenteredComponent>
              <Ezip />
            </CenteredComponent>
            <CenteredComponent>
              <Ueat />
            </CenteredComponent>
          </div>
          <div className="row">
            <CenteredComponent>
              <Ai />
            </CenteredComponent>
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
  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px; /* Adjust as needed for spacing between rows */
  }

  @media screen and (min-width: 1450px) {
    width: 60%;
    margin: 0 auto;
  }

  @media screen and (max-width: 1449px) {
    .row {
      flex-direction: column;
    }
  }
`;

const CenteredComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
