import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { modalToggle } from "../../store/modalStateSlice";
import styled from "styled-components";
import { SearchConstans } from "../../constants/SearchContans";
import { COLORS } from "../../css/GlobalStyle";

const SearchPopup = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<BOARD_PARAMS_TYPE> = (data: BOARD_PARAMS_TYPE) => {
    for (const x of SearchConstans.districtName) if (data[x] === true) data.districtName += `,${x}`;
    data.districtName = data.districtName?.slice(10);
    for (const x of SearchConstans.districtName) delete data[x];

    console.log(data);
  };

  return (
    <SearchPopupWrap>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <CloseBtn onClick={() => dispatch(modalToggle("searchModal"))}>닫기</CloseBtn>

        <SearchFormTitle>
          <p>찾는 구장을 검색해주세요</p>
          <input {...register("title")} />
        </SearchFormTitle>

        <SearchFormDate>
          <div>
            <p>날짜</p>
          </div>
          <div>
            <p>시간</p>
          </div>
        </SearchFormDate>

        <SearchFormDistrict>
          <p>지역을 선택해주세요</p>
          <div>
            {SearchConstans.districtName.map((name) => {
              return (
                <button type="button" key={name}>
                  <input type="checkbox" id={name} {...register(name)} />
                  <label htmlFor={name}>{name}</label>
                </button>
              );
            })}
          </div>
        </SearchFormDistrict>

        <button type="submit">제출 test</button>
      </SearchForm>
    </SearchPopupWrap>
  );
};

const SearchPopupWrap = styled.section`
  position: fixed;
  top: 60px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9999;
`;

const CloseBtn = styled.button`
  width: 50px;
  height: 50px;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1024px;
  margin: 0 auto;

  & > div {
    border: 1px solid #d9d9d9;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
    padding: 20px;

    & > p {
      color: #aaaaaa;
      font-weight: 600;
      font-size: 16px;
    }
  }

  & > div:nth-child(3) {
    border: none;
    border-radius: 0;
    box-shadow: none;
    padding: 0;

    & > div {
      border: 1px solid #d9d9d9;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
      padding: 20px;

      & > p {
        color: #aaaaaa;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
`;

const SearchFormTitle = styled.div`
  p {
    color: #000;
  }
`;

const SearchFormDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & > div {
    width: 50%;
  }
`;

const SearchFormDistrict = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    max-width: 900px;
    margin: 40px auto 30px;

    button {
      input[type="checkbox"] {
        display: none;
      }

      input[type="checkbox"] + label {
        font-size: 16px;
        color: #3a3a3a;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 3px;
        border-radius: 10px;
        background-color: #e9e9e9;
        padding: 6px 12px;
        cursor: pointer;
      }

      input[type="checkbox"]:checked + label {
        background-color: ${COLORS.MainColor};
        color: #fff;
      }
    }
  }
`;

export default SearchPopup;
