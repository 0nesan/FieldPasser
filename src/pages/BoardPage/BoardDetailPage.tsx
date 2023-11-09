import styled from "styled-components";
import BoardDetailContentsBox from "../../components/BoardDetailPageComponents/BoardDetailContentsBox";

const BoardDetailPage = () => {
  return (
    <Container>
      <BoardDetailContentsBox />
    </Container>
  );
};

const Container = styled.main`
  max-width: 794px;
  margin: 32px auto 0;
`;

export default BoardDetailPage;
