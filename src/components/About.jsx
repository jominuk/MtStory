import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scrolls from "../hooks/Scrolls";

const About = () => {
  const scrollPosition = 900;
  const imageStyles = Scrolls(scrollPosition);

  return (
    <>
      <div style={imageStyles}>
        <StTitle>about</StTitle>
        <StContainer>
          <div className="imgGro">
            <div className="proflie-img" />
          </div>
          <div className="content">
            <div className="proflie-imfor">
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-address-book"
                  className="font"
                />
                조민욱
              </p>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-cake-candles"
                  className="font"
                />
                92.10.25
              </p>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-location-dot"
                  className="font"
                />
                경기도 성남시
              </p>
              <p>
                <FontAwesomeIcon icon="fa-solid fa-envelope" className="font" />
                jominuk1025 @ gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon="fa-solid fa-school" className="font" />
                두원공과 대학교(기계과)
              </p>
            </div>

            <div className="sns">
              <a href="https://github.com/jominuk">
                <img src={require("../images/git.jpg")} alt="git" />
              </a>
              <a href="https://minuk22.tistory.com/">
                <img src={require("../images/ti.jpg")} alt="tistory" />
              </a>
              <a href="https://velog.io/@jominuk1025">
                <img src={require("../images/vel.jpg")} alt="velog" />
              </a>
            </div>
          </div>
        </StContainer>
      </div>
    </>
  );
};

export default About;

const StTitle = styled.div`
  font-size: 54px;
  font-weight: 800;
  margin-bottom: 50px;
  color: rgba(0, 0, 0, 0.6);
`;

const StContainer = styled.div`
  .proflie-img {
    border-radius: 50%;
    background: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcvaBCy%2FbtssaAg8bo4%2FrTI2rCaylhSz9w4o62GVOk%2Fimg.jpg)
      no-repeat center center;
    background-size: cover;
  }

  @media screen and (min-width: 1400px) {
    display: flex;
    width: 80%;
    height: 500px;
    border-radius: 30px;
    margin: 0% auto;
    box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.3);

    .font {
      margin-right: 20px;
      font-size: 24px;
    }

    .imgGro {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
    .proflie-img {
      width: 250px;
      height: 380px;
    }

    .content {
      width: 50%;

      .proflie-imfor {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding: 10px 0 10px 40px;
      }

      .sns {
        display: flex;
        justify-content: space-between;
        width: 60%;
        padding-left: 40px;
      }
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    display: flex;
    width: 90%;
    height: 500px;
    margin: 0% auto;
    border-radius: 30px;
    box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.3);

    .font {
      margin-right: 10px;
      font-size: 18px;
    }

    .imgGro {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
    .proflie-img {
      width: 250px;
      height: 380px;
    }

    .content {
      width: 50%;

      .proflie-imfor {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding: 10px 0 10px 40px;
      }

      .sns {
        display: flex;
        justify-content: space-between;
        width: 60%;
        padding-left: 40px;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    .imgGro {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 300px;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.3);
    }
    .proflie-img {
      width: 250px;
      height: 250px;
    }

    .font {
      margin-right: 10px;
      font-size: 18px;
    }

    .content {
      width: 80%;
      margin: 20px auto;
      border-radius: 20px;
      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.3);

      .proflie-imfor {
        height: 370px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding: 10px 0 10px 60px;
      }

      .sns {
        display: flex;
        justify-content: space-around;
        width: 90%;
        margin: 0 auto;
        padding: 0 0 30px 0;
      }
    }
  }

  @media screen and (max-width: 599px) {
    .imgGro {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 300px;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.3);
    }

    .font {
      margin-right: 10px;
      font-size: 16px;
    }

    .proflie-img {
      width: 230px;
      height: 230px;
    }

    .content {
      margin: 20px auto;
      border-radius: 20px;
      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.3);

      .proflie-imfor {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding: 10px 0 10px 30px;
      }

      .sns {
        display: flex;
        justify-content: space-around;
        width: 90%;
        margin: 0 auto;
        padding: 0 0 30px 0;
      }
    }
  }
`;
