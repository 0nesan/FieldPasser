import { createPortal } from 'react-dom';

const ModalPortal = ({children} : { children: React.ReactNode }) => {
  const el = document.getElementById('modal-root') as HTMLDivElement;
  return createPortal(children, el)
}

export default ModalPortal