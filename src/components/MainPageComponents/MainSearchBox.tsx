import styled from "styled-components";
import { SearchIcon, SearchToggleIcon } from "../../constants/Icons/sarchIcons";
import { useState } from 'react';
import ModalPortal from "../../Portal";
import SearchPopup from "../SearchPopupComponent/SearchPopupBox";

const MainSearchBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MainSearchBoxWrap>
      <div onClick={() => setIsModalOpen((props) => !props)}>
        <SearchIcon size={24} />
        <MainSearchBoxText>
          <p>어떤 구장을 찾으세요?</p>
          <p><span>어디든지</span><span>원하는 날짜</span></p>
        </MainSearchBoxText>
        <SearchToggleIcon />
      </div>
      {
        isModalOpen && (
          <ModalPortal>
            <SearchPopup onClose={() => setIsModalOpen(props => !props)} />
          </ModalPortal>
        )
      }
    </MainSearchBoxWrap>
  )
}

const MainSearchBoxWrap = styled.section`
  display:flex;
  justify-content: center;
  padding:20px;
  
  & > div {
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:520px;
    height:60px;
    padding:10px 20px; 
    border:1px solid #ddd;
    border-radius:40px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
    cursor: pointer;
  }
`

const MainSearchBoxText = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  
  p {
    font-weight: 600;
    font-size:16px;

    span {
      font-weight: 400;
      font-size:14px;
    }

    span:first-child {
      margin-right:10px;
    }
  }
`

export default MainSearchBox;