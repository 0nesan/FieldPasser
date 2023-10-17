import styled from "styled-components"
import { BadmintonIcon, BasketballIcon, FutsalIcon, SoccerIcon, TennisIcon } from "../../constants/Icons/categoryIcons"
import { COLORS } from "../../constants/css/css"
import { useState } from 'react'
import axios from "axios"

const MainCategoryBtnBox = () => {
  const [selectBtnColors, setSelectBtnColors] = useState<CategoryBtnColors>({
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

  const BASE_URL = import.meta.env.VITE_BASE_URL
  const publicApi = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
  })

  const getMainPostList = async () => {
    return await publicApi.get(`/search/1?title=&categoryName=&startTime=&endTime=&districtNames=강남구,서초구`).then((res) => {
      console.log(res.data.data)
      return res.data.data
    })
  }

  return (
    <BoardFreeViewWrap>
      <CategoryBtnWrap>
        <li>
          <CategoryBtn
            onClick={() => {
              seletBtnColorHandler('futsal')
              getMainPostList()
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
            }}
            $textcolor={selectBtnColors.tennis}>
            <TennisIcon color={selectBtnColors.tennis} size={24} />
            <span>테니스</span>
          </CategoryBtn>
        </li>
      </CategoryBtnWrap>
    </BoardFreeViewWrap>
  )
}

export default MainCategoryBtnBox

const BoardFreeViewWrap = styled.section`

`

const CategoryBtnWrap = styled.ul`
  display:flex;
  justify-content: center;
  align-items: center;
  gap:40px;
  height:102px;
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