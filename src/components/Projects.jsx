import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <StTitle>projects</StTitle>
      <StProjectBox>
        <div className="imgBox"></div>
        <div>
          <img />
        </div>
      </StProjectBox>

      <StProjectBox>
        <div>이미지</div>
        <div>내용</div>
      </StProjectBox>
    </>
  );
};

export default Projects;

const StTitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Phudu:wght@600;800&display=swap");
  font-family: "Phudu", cursive;
  font-size: 54px;
  font-weight: 800;
  margin-bottom: 50px;
  color: rgb(68, 70, 73);
`;

const StProjectBox = styled.div`
  display: flex;
  width: 55%;
  height: 380px;
  margin: 50px auto 50px auto;
  border: 1px solid rgb(6 154 94);
  border-radius: 30px;

  .imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;

    .img {
      width: 400px;
      height: 290px;
    }
  }
`;
