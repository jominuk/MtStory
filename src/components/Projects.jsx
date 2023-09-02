import styled from "styled-components";
import Ezip from "./projects/Ezip";
import Slack from "./projects/Slack";
import Scrolls from "../hooks/Scrolls";

const Projects = () => {
  const scrollPosition = 2600;
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
  @media screen and (min-width: 1400px) {
    width: 60%;
    margin: 0 auto;

    .ProjectBox {
      display: flex;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: 60%;
    margin: 0 auto;

    .ProjectBox {
      display: flex;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    display: flex;
    flex-direction: column;

    .ProjectBox {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 599px) {
    display: flex;
    flex-direction: column;

    .ProjectBox {
      margin: 0 auto;
    }
  }
`;
