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
    <StHeader className={`${scrolled ? "scrolled" : ""}`}>
      <nav>
        <a href="/">
          <img
            src={require("../images/minuk.png")}
            alt="logo"
            className="title"
          />
        </a>

        <div className={`${isMobile ? "mobile" : ""}`}>
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

      <StImgbox>
        <h2> 프론트엔드 개발자</h2>
        <h2> dev.</h2>
      </StImgbox>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  @media screen and (min-width: 1400px) {
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
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
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
  color: black;
  cursor: pointer;
  &:hover {
    color: rgb(0 161 167);
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgb(0 161 167);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform: scale(1);
  }
`;

const StImgbox = styled.div`
  /* background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNhZTb%2FbtsswVLnnSt%2F0aD4StTm4tjtGlvk8NYrSK%2Fimg.jpg")
    no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 600px; */
`;
