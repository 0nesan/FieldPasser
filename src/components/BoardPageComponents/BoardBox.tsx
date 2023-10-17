import styled from "styled-components";
import BoardItem from "./BoardItem";

interface BoardBoxProps {
  postData: POST_TYPE[] | undefined
}

const BoardBox: React.FC<BoardBoxProps> = (props) => {

  return (
    <BoardWrap>
      <ul>
        {props.postData && props.postData.length > 0 ? (
          <ul>
            {props.postData.map((item: POST_TYPE, idx: number) => (
              <BoardItem list={item} key={idx} />
            ))}
          </ul>
        ) : (
          <p>dd</p>
        )}
      </ul>
    </BoardWrap>
  )
}

export default BoardBox;

const BoardWrap = styled.section`
  
`