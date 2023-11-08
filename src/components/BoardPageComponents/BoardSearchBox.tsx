import styled from "styled-components";
import { SearchIcon, SearchToggleIcon } from "../../constants/Icons/sarchIcons";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const BoardSearchBox = () => {
  const boardListPrams = useSelector((state: RootState) => state.boardList.params);

  return (
    <BoardSearchBoxWrap>
      <div>
        <SearchIcon size={24} />
        <p>{boardListPrams.title ? boardListPrams.title : "어떤 구장을 찾으세요 ?"}</p>
        <SearchToggleIcon />
      </div>
    </BoardSearchBoxWrap>
  );
};

const BoardSearchBoxWrap = styled.section`
  width: 100%;
  max-width: none;
  height: 100px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;

  div {
    display: flex;
    align-items: center;
    padding: 4px 16px;
    margin: 0 auto;
    height: 60px;
    max-width: 1024px;
    border-radius: 40px;
    border: 1px solid rgb(217, 217, 217);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
    cursor: pointer;

    p {
      padding-left: 20px;
      width: 100%;
    }
  }
`;

export default BoardSearchBox;
