import styled from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  @media screen and (min-width: 1400px) {
    max-width: 1200px;
    margin: 0 auto;
    background-color: white;
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    max-width: 1100px;
    margin: 0 auto;
    background-color: white;
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    max-width: 700px;
    margin: 0 auto;
    background-color: white;
  }

  @media screen and (max-width: 599px) {
    max-width: 500px;
    margin: 0 auto;
    background-color: white;
  }
`;
