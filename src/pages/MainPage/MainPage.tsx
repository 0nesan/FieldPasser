import styled from "styled-components";
import CategoryBtnBox from "./MainCategoryBtnBox";
import MainBanner from "./MainBanner";

const MainPage = () => {
  return (
    <Container>
      <MainBanner />
      <CategoryBtnBox />
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

