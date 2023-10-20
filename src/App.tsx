import { Reset } from "styled-reset";
import { GlobalStyle } from "./css/GlobalStyle";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import ModalPortal from "./Portal";
import SearchPopup from "./components/SearchPopupComponents/SearchPopupBox";
import { useEffect } from "react";

const App = () => {
  const modalState = useSelector((state: RootState) => state.modalState);

  useEffect(() => {
    modalState.modalState.searchModal ? document.body.classList.add("non-scroll") : document.body.classList.remove("non-scroll");
  }, [modalState.modalState.searchModal]);

  return (
    <>
      <GlobalStyle />
      <Reset />
      <Header />
      <Outlet />
      <ModalPortal>{modalState.modalState.searchModal && <SearchPopup />}</ModalPortal>
    </>
  );
};

export default App;
