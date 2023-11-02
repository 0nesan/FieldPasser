import { AppDispatch } from "./../store/store";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoardList } from "../store/boardListDataSlice";
import { RootState } from "../store/store";

const useInfinityScroll = ({ setPage }: INFINITYSCROLL_PROPS_TYPE) => {
  const dispatch: AppDispatch = useDispatch();
  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const boardListLast = useSelector((state: RootState) => state.boardList.lastPage);
  const mainBoardListParams = useSelector((state: RootState) => state.boardList.params);

  const getPostList = useCallback(
    async (page: number) => {
      setIsLoading(true);
      try {
        await dispatch(fetchBoardList({ params: mainBoardListParams, page: page }));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, mainBoardListParams]
  );

  useEffect(() => {
    setPage(1);
  }, [mainBoardListParams, setPage]);

  useEffect(() => {
    if (inView && !boardListLast) {
      setPage((prev: number) => prev + 1);
    }
  }, [inView, boardListLast, setPage]);

  return { boardListLast, isLoading, getPostList, ref };
};

export default useInfinityScroll;
