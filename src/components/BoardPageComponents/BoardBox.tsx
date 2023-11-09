import styled from "styled-components";
import BoardItem from "./BoardItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useLocation } from "react-router-dom";
import useInfinityScroll from "../../hooks/useInfinityScroll";
import { useEffect, useState } from "react";

const BoardBox = () => {
  const location = useLocation();
  const path = location.pathname;
  const [page, setPage] = useState(1);

  const boardListData = useSelector((state: RootState) => state.boardList.boardData);
  const boardListPrams = useSelector((state: RootState) => state.boardListParams.boardListParams);

  const { isLoading, getPostList, ref } = useInfinityScroll({ boardListPrams, setPage });

  useEffect(() => {
    getPostList(boardListPrams, page);
  }, [getPostList, page, boardListPrams]);

  return (
    <BoardWrap>
      {boardListData && boardListData.length > 0 ? (
        <>
          <BoardListWrap $pathname={path}>
            {boardListData.map((item: POST_TYPE, idx: number) => (
              <BoardItem list={item} key={idx} />
            ))}
          </BoardListWrap>
          {!isLoading && <div style={{ height: "10px" }} ref={ref}></div>}
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
