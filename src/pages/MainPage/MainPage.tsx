import styled from "styled-components";
import CategoryBtnBox from "../../components/MainPage/MainCategoryBtnBox";
import MainBanner from "../../components/MainPage/MainBanner";
import BoardBox from "../../components/Board/BoardBox";
import { useEffect, useState } from 'react';
import { getPostList } from "../../api/boardApi";

const MainPage = () => {
  const [postData, setPostData] = useState<POST_TYPE[]>();
  const getPostDataFn = async () => {
    try {
      setPostData(await getPostList({ categoryName: '풋살장' }))
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getPostDataFn()
  }, []);

  return (
    <Container>
      <MainBanner />
      <CategoryBtnBox />
      <BoardBox postData={postData} />
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

