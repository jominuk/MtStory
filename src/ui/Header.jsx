import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 599 });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeClikck = () => {
    if (isMobile) {
      setDropdownOpen(false);
    }
  };

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
      <a href="/" className="title">
        jominuk Portfolio
      </a>

      <div className={`${isMobile ? "mobile" : ""}`}>
        {isMobile ? (
          <div className="dropdownIcon" onClick={toggleDropdown}>
            ☰
          </div>
        ) : (
          <>
            <div className="headerContent">
              <a href="#about">&lt;About /&gt;</a>
              <div>&lt;Skills /&gt;</div>
              <div>&lt;Projects /&gt;</div>
            </div>
          </>
        )}
      </div>

      {isMobile && dropdownOpen && (
        <div className="mobileDropdown">
          <a href="#about" onClick={closeClikck}>
            &lt;About /&gt;
          </a>
          <a href="#Skills" onClick={closeClikck}>
            &lt;Skills /&gt;
          </a>
          <a href="#Projects" onClick={closeClikck}>
            &lt;Projects /&gt;
          </a>
        </div>
      )}
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  @media screen and (min-width: 1400px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    height: 70px;
    font-size: 20px;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    .title {
      @import url("https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap");
      font-family: "Rubik Iso", cursive;
      font-weight: 600;
      color: black;
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

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    font-size: 20px;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    .title {
      @import url("https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap");
      font-family: "Rubik Iso", cursive;
      font-weight: 600;
      color: black;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    font-size: 20px;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    .title {
      @import url("https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap");
      font-family: "Rubik Iso", cursive;
      font-weight: 600;
      color: black;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    font-size: 20px;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    .title {
      @import url("https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap");
      font-family: "Rubik Iso", cursive;
      font-weight: 600;
      color: black;
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
      top: 50px;
      background-color: white;
      border: 1px solid #ccc;
      width: 100%;

      a {
        padding: 15px;
        border-bottom: 1px solid #ccc;
        text-align: center;
        cursor: pointer;
      }
      a:last-child {
        border-bottom: none;
      }
    }
  }
`;
