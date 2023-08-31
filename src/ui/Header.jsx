import { useState, useEffect, useCallback } from "react";
import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 599 });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const scrollToSection = useCallback(
    (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      if (isMobile) {
        setDropdownOpen(false);
      }
    },
    [isMobile]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <StImgbox>
        <div className="txt1"> FRONT-END DEV.</div>
        <div className="txt2"> fortfolio </div>
        <img src={require("../images/down.png")} className="down" />
      </StImgbox>

      <StHeader className={`${scrolled ? "scrolled" : ""}`}>
        <nav>
          <a href="/">
            <img
              src={require("../images/minuk.png")}
              alt="logo"
              className="title"
            />
          </a>

          <div className={isMobile ? "mobile" : ""}>
            {isMobile ? (
              <div className="dropdownIcon" onClick={toggleDropdown}>
                ☰
              </div>
            ) : (
              <>
                <div className="headerContent">
                  <StTitleButton
                    className={"About" ? "active" : ""}
                    onClick={() => scrollToSection("about")}
                  >
                    &lt;About/&gt;
                  </StTitleButton>

                  <StTitleButton
                    className={"Skills" ? "active" : ""}
                    onClick={() => scrollToSection("skills")}
                  >
                    &lt;Skills/&gt;
                  </StTitleButton>

                  <StTitleButton
                    className={"Projects" ? "active" : ""}
                    onClick={() => scrollToSection("projects")}
                  >
                    &lt;Projects/&gt;
                  </StTitleButton>
                </div>
              </>
            )}
          </div>

          {isMobile && dropdownOpen && (
            <div className="mobileDropdown">
              <button onClick={() => scrollToSection("about")}>
                &lt;About/&gt;
              </button>
              <button onClick={() => scrollToSection("skills")}>
                &lt;Skills/&gt;
              </button>
              <button onClick={() => scrollToSection("projects")}>
                &lt;Projects/&gt;
              </button>
            </div>
          )}
        </nav>
      </StHeader>
    </>
  );
};

export default Header;

const StImgbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertical centering */
  align-items: center; /* Horizontal centering */
  background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkXyq1%2FbtssCvslSVc%2Fs1yHBkkWHuskOJduK90l8K%2Fimg.jpg")
    no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
  height: 80vh;

  .txt1 {
    text-align: center;
    font-size: 100px;
    font-weight: 600;
    margin-top: 250px;
  }

  .txt2 {
    text-align: center;
    font-size: 40px;
    line-height: 180px;
    font-weight: 600;
  }

  .down {
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 200px;
    margin-top: 100px;
    animation: scrolldown 1300ms linear infinite;
  }

  @keyframes scrolldown {
    0% {
      bottom: 230px;
      opacity: 1;
    }
    50% {
      bottom: 210px;
      opacity: 0.5;
    }
    100% {
      bottom: 190px;
      opacity: 0;
    }
  }
`;

const StHeader = styled.div`
  @media screen and (min-width: 1400px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 100;
    background: rgba(255, 255, 255, 0);

    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 1600px;
      margin: 0 auto;
      height: 100%;
      font-size: 20px;
    }

    .title {
      width: 80px;
      height: 50px;
    }

    .headerContent {
      display: flex;
      justify-content: space-between;
      width: 400px;
    }

    &.scrolled {
      background: white;
      box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 100;

    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      height: 100%;
      font-size: 20px;
    }

    .title {
      width: 80px;
      height: 50px;
    }

    .headerContent {
      display: flex;
      justify-content: space-between;
      width: 350px;
    }

    &.scrolled {
      background: white;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    }
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 100;

    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      height: 100%;
      font-size: 20px;
    }

    .title {
      width: 80px;
      height: 50px;
    }

    .headerContent {
      display: flex;
      justify-content: space-between;
      width: 350px;
    }

    &.scrolled {
      background: white;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    }
  }

  @media screen and (max-width: 599px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 100;

    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      height: 100%;
      font-size: 20px;
    }

    .title {
      width: 80px;
      height: 50px;
    }

    .dropdownIcon {
      cursor: pointer;
    }

    &.scrolled {
      background: white;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    }

    .mobileDropdown {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 70px;
      background-color: white;
      border: 1px solid #ccc;
      width: 100%;

      button {
        padding: 15px;
        border: none;
        border-bottom: 1px solid #ccc;
        text-align: center;
        cursor: pointer;
        background: none;
        font-size: inherit;
      }

      button:last-child {
        border-bottom: none;
      }
    }
  }
`;

const StTitleButton = styled.button`
  margin: 0 10px;
  position: relative;
  font-size: 22px;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: black;
  &:hover {
    color: #3437e0c7;
    scale: 1.1;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #3437e0c7;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform: scale(1);
  }
`;
