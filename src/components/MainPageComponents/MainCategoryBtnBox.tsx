import styled from "styled-components"
import { BadmintonIcon, BasketballIcon, FutsalIcon, SoccerIcon, TennisIcon } from "../../constants/Icons/categoryIcons"
import { useState, useEffect } from 'react'
import { COLORS } from "../../css/GlobalStyle"
import { fetchBoardList } from "../../store/slice/boardListDataSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from '../../store/store'

const MainCategoryBtnBox = () => {
  const dispatch: AppDispatch = useDispatch()

  const [selectBtnColors, setSelectBtnColors] = useState<CATEGORY_BTN_COLORS_TYPE>({
    futsal: COLORS.MainColor,
    soccer: '#00000099',
    basketball: '#00000099',
    badminton: '#00000099',
    tennis: '#00000099'
  });

  const seletBtnColorHandler = (category: string) => {
    for (const key in selectBtnColors) {
      selectBtnColors[key] = '#00000099'
    }

    return setSelectBtnColors({ ...selectBtnColors, [category]: COLORS.MainColor })
  }

  const mainBoardListData = useSelector((state: RootState) => state.boardList.boardData)
  useEffect(() => {
    if (mainBoardListData.length === 0) {
      dispatch(fetchBoardList({ params: { categoryName: '풋살장' }, page: 1 }))
    }
  }, [mainBoardListData.length, dispatch])

  return (
    <BoardFreeViewWrap>
      <ul>
        <li>
          <CategoryBtn
            onClick={() => {
              seletBtnColorHandler('futsal')
              dispatch(fetchBoardList({ params: { categoryName: '풋살장' }, page: 1 }))
            }}
            $textcolor={selectBtnColors.futsal}>
            <FutsalIcon color={selectBtnColors.futsal} size={24} />
            <span>풋살</span>
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn
            onClick={() => {
              seletBtnColorHandler('soccer')
              dispatch(fetchBoardList({ params: { categoryName: '축구장' }, page: 1 }))
            }}
            $textcolor={selectBtnColors.soccer}>
            <SoccerIcon color={selectBtnColors.soccer} size={24} />
            <span>축구</span>
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn
            onClick={() => {
              seletBtnColorHandler('basketball')
              dispatch(fetchBoardList({ params: { categoryName: '농구장' }, page: 1 }))
            }}
            $textcolor={selectBtnColors.basketball}>
            <BasketballIcon color={selectBtnColors.basketball} size={24} />
            <span>농구</span>
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn
            onClick={() => {
              seletBtnColorHandler('badminton')
              dispatch(fetchBoardList({ params: { categoryName: '배드민턴장' }, page: 1 }))
            }}
            $textcolor={selectBtnColors.badminton}>
            <BadmintonIcon color={selectBtnColors.badminton} size={24} />
            <span>배드민턴</span>
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn
            onClick={() => {
              seletBtnColorHandler('tennis')
              dispatch(fetchBoardList({ params: { categoryName: '테니스장' }, page: 1 }))
            }}
            $textcolor={selectBtnColors.tennis}>
            <TennisIcon color={selectBtnColors.tennis} size={24} />
            <span>테니스</span>
          </CategoryBtn>
        </li>
      </ul>
    </BoardFreeViewWrap>
  )
}

export default MainCategoryBtnBox

const BoardFreeViewWrap = styled.section`
  ul {
    display:flex;
    justify-content: center;
    align-items: center;
    gap:40px;
    height:102px;
  }
`

const CategoryBtn = styled.button<{ $textcolor?: string }>`
  display:flex;
  flex-direction: column;
  gap:8px;
  width:80px;
  height:70px;

  span {
    font-size:16px;
    color:${props => props.$textcolor}
  }
`