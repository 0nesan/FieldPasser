import React from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  if (!children) return;
  const el = document.getElementById("modal-root") as HTMLDivElement;
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
