import styled from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  @media screen and (min-width: 1400px) {
    margin: 0 auto;
    background-color: white;
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    margin: 0 auto;
    background-color: white;
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    margin: 0 auto;
    background-color: white;
  }

  @media screen and (max-width: 599px) {
    margin: 0 auto;
  }
`;
