import { Reset } from "styled-reset";
import { GlobalStyle } from "./css/GlobalStyle";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Reset />
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default App;
