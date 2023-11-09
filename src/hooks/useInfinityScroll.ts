import { AppDispatch } from "./../store/store";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoardList } from "../store/boardListDataSlice";
import { RootState } from "../store/store";

const useInfinityScroll = ({ boardListPrams, setPage }: INFINITYSCROLL_PROPS_TYPE) => {
  const dispatch: AppDispatch = useDispatch();
  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(false);

  const lastPage = useSelector((state: RootState) => state.boardList.lastPage);

  const getPostList = useCallback(
    async (params: BOARD_PARAMS_TYPE, page: number) => {
      try {
        setIsLoading(true);
        await dispatch(fetchBoardList({ params: params, page: page }));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    setPage(1);
  }, [boardListPrams, setPage]);

  useEffect(() => {
    if (inView && !lastPage) {
      setPage((prev: number) => prev + 1);
    }
  }, [inView, lastPage, setPage]);

  return { isLoading, getPostList, ref };
};

export default useInfinityScroll;
