import styled from "styled-components";
import BoardItem from "./BoardItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { useEffect, useState } from "react";
import { fetchBoardList } from "../../store/boardListDataSlice";
import { useLocation } from "react-router-dom";
import useInfinityScroll from "../../hooks/useInfinityScroll";

const BoardBox = () => {
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const mainBoardListData = useSelector((state: RootState) => state.boardList.boardData);
  const mainBoardListStatus = useSelector((state: RootState) => state.boardList.status);

  // const [payload, setPayload] = useState<BOARD_PARAMS_TYPE>({ categoryName: "풋살장" });
  const [page, setPage] = useState<number>(1);
  const { boardListLast, isLoading, ref, getPostList } = useInfinityScroll({ setPage });

  // useEffect(() => {
  //   if (mainBoardListStatus === "idle" && path === "/" && page === 1) {
  //     dispatch(fetchBoardList({ params: , page: 1 }));
  //   }
  // }, [mainBoardListStatus, dispatch, path, page]);

  useEffect(() => {
    !boardListLast && getPostList(page);
  }, [page, getPostList, boardListLast]);

  return (
    <BoardWrap>
      {mainBoardListData && mainBoardListData.length > 0 ? (
        <>
          <BoardListWrap $pathname={path}>
            {mainBoardListData.map((item: POST_TYPE, idx: number) => (
              <BoardItem list={item} key={idx} />
            ))}
          </BoardListWrap>
          {!isLoading && <div ref={ref}></div>}
        </>
      ) : (
        <ErrorComponent>게시글이 없습니다.</ErrorComponent>
      )}
    </BoardWrap>
  );
};

export default BoardBox;

const BoardWrap = styled.section`
  margin-top: 30px;
`;
const BoardListWrap = styled.ul<{ $pathname: string }>`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  max-height: ${(props) => (props.$pathname === "/" ? "60%" : "100%")};
  overflow: hidden;
  cursor: pointer;
`;

const ErrorComponent = styled.section``;
