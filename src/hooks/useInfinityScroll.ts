import { AppDispatch } from "./../store/store";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoardList } from "../store/boardListDataSlice";
import { RootState } from "../store/store";

const useInfinityScroll = ({ boardListParams, setPage }: INFINITYSCROLL_PROPS_TYPE) => {
  const dispatch: AppDispatch = useDispatch();
  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(false);

  const lastPage = useSelector((state: RootState) => state.boardList.lastPage);

  const getPostList = useCallback(
    async (payload: BOARD_PARAMS_TYPE, page: number) => {
      setIsLoading(true);
      await dispatch(fetchBoardList({ params: payload, page: page }));
      setIsLoading(false);
    },
    [dispatch]
  );

  useEffect(() => {
    setPage(1);
  }, [boardListParams, setPage]);

  useEffect(() => {
    if (inView && !lastPage) {
      setPage((prev: number) => prev + 1);
    }
  }, [inView, lastPage, setPage]);

  return { lastPage, isLoading, getPostList, ref };
};

export default useInfinityScroll;
