import styled from "styled-components";
import CategoryBtnBox from "../../components/MainPageComponents/MainCategoryBtnBox";
import MainBanner from "../../components/MainPageComponents/MainBanner";
import BoardBox from "../../components/BoardPageComponents/BoardBox";
import { useSelector } from "react-redux";
import { RootState } from '../../store/store'
import { COLORS } from "../../css/GlobalStyle";
import SearchBox from "../../components/MainPageComponents/MainSearchBox";

const MainPage = () => {
  const mainBoardListData = useSelector((state: RootState) => state.boardList.boardData)

  return (
    <Container>
      <MainBanner />
      <SearchBox />
      <CategoryBtnBox />
      <BoardBox postData={mainBoardListData} />
      <MoreBtn>더보기</MoreBtn>
    </Container>
  );
};

export default MainPage;

const Container = styled.main`
  display: block;
  font-size: 16px;
  margin: auto;
  max-width: 1024px;
`;

const MoreBtn = styled.button`
  margin: 0 auto;
  padding:10px 20px;
  font-size: 16px;
  color:#fff;
  background-color:${COLORS.MainColor};
  border-radius: 10px;
`

