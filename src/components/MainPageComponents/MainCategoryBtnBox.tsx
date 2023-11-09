import styled from "styled-components";
import { BadmintonIcon, BasketballIcon, FutsalIcon, SoccerIcon, TennisIcon } from "../../constants/Icons/categoryIcons";
import { useEffect, useState } from "react";
import { COLORS } from "../../css/GlobalStyle";
import { fetchBoardList } from "../../store/boardListDataSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { boardListParams } from "../../store/boardListParamsSlice";

const MainCategoryBtnBox = () => {
  const dispatch: AppDispatch = useDispatch();

  const [selectBtnColors, setSelectBtnColors] = useState<CATEGORY_BTN_COLORS_TYPE>({
    풋살장: COLORS.MainColor,
    축구장: "#00000099",
    농구장: "#00000099",
    배드민턴장: "#00000099",
    테니스장: "#00000099",
  });

  const selectBtnColorHandler = (category: string) => {
    for (const key in selectBtnColors) selectBtnColors[key] = "#00000099";
    return setSelectBtnColors({ ...selectBtnColors, [category]: COLORS.MainColor });
  };

  useEffect(() => {
    for (const key in selectBtnColors) {
      if (selectBtnColors[key] === COLORS.MainColor) {
        dispatch(fetchBoardList({ params: { categoryName: key }, page: 1 }));
        dispatch(boardListParams({ categoryName: key }));
      }
    }
  }, [selectBtnColors, dispatch]);

  return (
    <CategoryBtnBox>
      <ul>
        <li>
          <CategoryBtn
            onClick={() => {
              selectBtnColorHandler("풋살장");
            }}
            $textcolor={selectBtnColors.풋살장}
          >
            <FutsalIcon fill={selectBtnColors.풋살장} size={24} />
            <span>풋살</span>
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn
            onClick={() => {
              selectBtnColorHandler("축구장");
            }}
            $textcolor={selectBtnColors.축구장}
          >
            <SoccerIcon fill={selectBtnColors.축구장} size={24} />
            <span>축구</span>
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn
            onClick={() => {
              selectBtnColorHandler("농구장");
            }}
            $textcolor={selectBtnColors.농구장}
          >
            <BasketballIcon fill={selectBtnColors.농구장} size={24} />
            <span>농구</span>
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn
            onClick={() => {
              selectBtnColorHandler("배드민턴장");
            }}
            $textcolor={selectBtnColors.배드민턴장}
          >
            <BadmintonIcon fill={selectBtnColors.배드민턴장} size={24} />
            <span>배드민턴</span>
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn
            onClick={() => {
              selectBtnColorHandler("테니스장");
            }}
            $textcolor={selectBtnColors.테니스장}
          >
            <TennisIcon stroke={selectBtnColors.테니스장} size={24} />
            <span>테니스</span>
          </CategoryBtn>
        </li>
      </ul>
    </CategoryBtnBox>
  );
};

export default MainCategoryBtnBox;

const CategoryBtnBox = styled.section`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 102px;
  }
`;

const CategoryBtn = styled.button<{ $textcolor?: string }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80px;
  height: 70px;

  span {
    font-size: 16px;
    color: ${(props) => props.$textcolor};
  }
`;
