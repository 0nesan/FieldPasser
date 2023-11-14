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
    if (modalState.modalState.searchModal) return document.body.classList.add("non-scroll"), window.scrollTo(0, 0);
    return document.body.classList.remove("non-scroll");
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
