import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  max-width: 1200px;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
