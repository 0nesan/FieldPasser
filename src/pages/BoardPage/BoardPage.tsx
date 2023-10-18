import styled from "styled-components";
import BoardBox from "../../components/BoardPageComponents/BoardBox";
import BoardSearchBox from "../../components/BoardPageComponents/BoardSearchBox";

const BoardPage = () => {
  return (
    <Container>
      <BoardSearchBox />
      <BoardBox />
    </Container>
  )
}

const Container = styled.main`
  display: block;
  font-size: 16px;
  margin: auto;
  max-width: 1024px;
`

export default BoardPage;