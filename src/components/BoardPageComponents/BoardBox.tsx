import styled from "styled-components";
import BoardItem from "./BoardItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from '../../store/store'
import { useEffect } from "react";
import { fetchBoardList } from "../../store/boardSlice/boardListDataSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { COLORS } from "../../css/GlobalStyle";

const BoardBox = () => {
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  const mainBoardListData = useSelector((state: RootState) => state.boardList.boardData)
  const mainBoardListStatus = useSelector((state: RootState) => state.boardList.status)
  const mainBoardListParams = useSelector((state: RootState) => state.boardList.params)

  useEffect(() => {
    if (mainBoardListStatus === 'idle' && path === '/') {
      dispatch(fetchBoardList({ params: { categoryName: '풋살장' }, page: 1 }))
    }
  }, [mainBoardListStatus, dispatch, path])

  return (
    <BoardWrap>
      {mainBoardListData && mainBoardListData.length > 0 ? (
        <>
          <BoardListWrap $pathname={path}>
            {mainBoardListData.map((item: POST_TYPE, idx: number) => (
              <BoardItem list={item} key={idx} />
            ))}
          </BoardListWrap>
          {(path === '/' && mainBoardListData.length > 9) && (
            <MoreBtn
              onClick={() => {
                dispatch(fetchBoardList({ params: { categoryName: mainBoardListParams.params.categoryName }, page: 1 }))
                navigate('/board')
                window.scrollTo(0, 0);
              }}
            >
              더보기
            </MoreBtn>
          )}
        </>
      ) : (
        <ErrorComponent>
          게시글이 없습니다.
        </ErrorComponent>
      )}
    </BoardWrap>
  )
}

export default BoardBox;

const BoardWrap = styled.section`
  margin-top:30px;
`
const BoardListWrap = styled.ul<{ $pathname: string }>`
  display:flex;
  flex-wrap: wrap;
  margin-left:-10px;
  margin-right:-10px;
  max-height:${(props) => props.$pathname === '/' ? '1440px' : '100%'};
  overflow:hidden;
`

const ErrorComponent = styled.section``

const MoreBtn = styled.button`
  margin: 0 auto;
  padding:10px 20px;
  font-size: 16px;
  color:#fff;
  background-color:${COLORS.MainColor};
  border-radius: 10px;
`