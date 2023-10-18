import styled from "styled-components";
import BoardItem from "./BoardItem";

interface BoardBoxProps {
  postData: POST_TYPE[] | undefined
}

const BoardBox: React.FC<BoardBoxProps> = ({ postData }) => {

  return (
    <BoardWrap>
      {postData && postData.length > 0 ? (
        <BoardListWrap>
          {postData.map((item: POST_TYPE, idx: number) => (
            <BoardItem list={item} key={idx} />
          ))}
        </BoardListWrap>
      ) : (
        <ErrorComponent />
      )}
    </BoardWrap>
  )
}

export default BoardBox;

const BoardWrap = styled.section`
  margin-top:30px;
`
const BoardListWrap = styled.ul`
  display:flex;
  flex-wrap: wrap;
`

const ErrorComponent = styled.section``