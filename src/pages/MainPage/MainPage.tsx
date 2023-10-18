import styled from "styled-components";
import CategoryBtnBox from "../../components/MainPageComponents/MainCategoryBtnBox";
import MainBanner from "../../components/MainPageComponents/MainBanner";
import BoardBox from "../../components/BoardPageComponents/BoardBox";
import MainSearchBox from "../../components/MainPageComponents/MainSearchBox";

const MainPage = () => {
  return (
    <Container>
      <MainBanner />
      <MainSearchBox />
      <CategoryBtnBox />
      <BoardBox />
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
