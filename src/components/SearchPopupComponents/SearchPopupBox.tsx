import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useForm, SubmitHandler, Controller, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { modalToggle } from "../../store/modalStateSlice";
import { SearchConstans } from "../../constants/SearchContans";
import { COLORS } from "../../css/GlobalStyle";
import { SearchIcon } from "../../constants/Icons/sarchIcons";
import { ko } from "date-fns/esm/locale";
import SearchFormDatePicker from "./SearchFormDate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBoardList } from "../../store/boardListDataSlice";
import { AppDispatch } from "../../store/store";

const SearchPopup = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { control, register, handleSubmit, watch, reset } = useForm();
  useFieldArray({
    control,
    name: "districtNames",
  });

  const [checkDate, setCheckDate] = useState({
    startDate: false,
    endDate: false,
  });
  const [openDistrictBox, setOpenDistrictBox] = useState(false);

  const onSubmit: SubmitHandler<BOARD_PARAMS_TYPE> = (data: BOARD_PARAMS_TYPE) => {
    data.districtNames = data.districtNames.join(",");
    if (data.title?.trim() === "") data.title = "";
    if (!checkDate.startDate && !checkDate.endDate) (data.startTime = ""), (data.endTime = "");
    else if (data.startDate && data.endDate) {
      data.startTime = new Date(data.startDate).toISOString().substring(0, 10) + "T" + (data.startTime || "00:00") + ":00";
      data.endTime = new Date(data.endDate).toISOString().substring(0, 10) + "T" + (data.endTime || "23:59") + ":59";
    }
    if ((data.startTime && !data.endTime) || (!data.startTime && data.endTime)) return alert("시간을 확인하세요.");
    (data.startDate = ""), (data.endDate = "");

    dispatch(fetchBoardList({ params: data, page: 1 }));
    navigate("/board");
  };

  // console.log(watch());
  return (
    <SearchPopupWrap>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <CloseBtn onClick={() => dispatch(modalToggle("searchModal"))}>닫기</CloseBtn>

        <SearchFormTitle>
          <p style={{ color: watch("title") ? "#000" : "" }}>찾는 구장을 검색해주세요</p>
          <div>
            <SearchIcon size={16} color="#3a3a3a" />
            <input placeholder="ex) 보라매 공원" {...register("title")} />
          </div>
        </SearchFormTitle>

        <SearchFormDate
          $startdate={checkDate.startDate}
          $enddate={checkDate.endDate}
          $starttime={watch("startTime")}
          $endtime={watch("endTime")}
        >
          <div>
            <p style={{ color: checkDate.startDate || checkDate.endDate ? "#000" : "" }}>날짜</p>
            <Controller
              control={control}
              name="startDate"
              defaultValue={new Date()}
              render={({ field }) => (
                <DatePicker
                  onChange={(date: Date) => {
                    field.onChange(date);
                    setCheckDate((v) => ({ ...v, startDate: true }));
                    reset((formValues) => ({ ...formValues, startTime: "", endTime: "" }));
                  }}
                  locale={ko}
                  selected={field.value}
                  customInput={<SearchFormDatePicker onClick={() => {}} placeholder={field.value} />}
                  placeholderText={field.value}
                  dateFormat="dd.MM"
                  maxDate={watch("endDate")}
                  wrapperClassName="start-date"
                  shouldCloseOnSelect={false}
                />
              )}
            />
            <Controller
              control={control}
              name="endDate"
              defaultValue={new Date()}
              render={({ field }) => (
                <DatePicker
                  onChange={(date: Date) => {
                    field.onChange(date);
                    setCheckDate((v) => ({ ...v, endDate: true }));
                    reset((formValues) => ({ ...formValues, startTime: "", endTime: "" }));
                  }}
                  locale={ko}
                  selected={field.value}
                  customInput={<SearchFormDatePicker onClick={() => {}} placeholder={field.value} />}
                  placeholderText={field.value}
                  dateFormat="dd.MM"
                  minDate={watch("startDate")}
                  wrapperClassName="end-date"
                  shouldCloseOnSelect={false}
                />
              )}
            />
          </div>
          <div>
            <p style={{ color: watch("startTime") && watch("endTime") ? "#000" : "" }}>시간</p>
            <div
              className="form-time-wrap"
              onClick={() => {
                if (!(checkDate.startDate && checkDate.endDate)) alert("날짜를 먼저 선택해주세요.");
                else if (watch("startDate").toISOString() !== watch("endDate").toISOString())
                  alert("동일한 날짜에만 시간 조회가 가능합니다.");
              }}
            >
              <input type="time" id="start-time" {...register("startTime")} max={watch("endTime")} />
              <label htmlFor="start-time">{watch("startTime") || "--:--"}</label>
              <p>시 ~</p>
              <input type="time" id="end-time" {...register("endTime")} min={watch("startTime")} />
              <label htmlFor="end-time">{watch("endTime") || "--:--"}</label>
              <p>시</p>
            </div>
          </div>
        </SearchFormDate>

        <SearchFormDistrict>
          <p
            aria-label="지역선택 토글버튼"
            role="button"
            onClick={() => setOpenDistrictBox((state) => !state)}
            style={{ color: watch("districtNames")?.length > 0 ? "#000" : "" }}
          >
            지역을 선택해주세요
          </p>
          {openDistrictBox && (
            <div>
              {SearchConstans.districtName.map((name, idx) => {
                return (
                  <button
                    type="button"
                    key={idx}
                    onClick={(e) => {
                      if (watch("districtNames").length > 4 && watch("districtNames").indexOf(name) === -1) {
                        e.preventDefault();
                        alert("지역은 최대 5개 선택 가능합니다.");
                      }
                    }}
                  >
                    <input type="checkbox" id={name} value={name} {...register(`districtNames`)} />
                    <label htmlFor={name}>{name}</label>
                  </button>
                );
              })}
            </div>
          )}
        </SearchFormDistrict>

        <SubmitBtnBox>
          <button
            type="button"
            onClick={() => {
              reset({ districtNames: [], startDate: new Date(), endDate: new Date(), title: "", startTime: "", endTime: "" });
              setCheckDate({ startDate: false, endDate: false });
            }}
          >
            초기화
          </button>
          <button type="submit">검색하기</button>
        </SubmitBtnBox>
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
  overflow: auto;
  padding-bottom: 100px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    flex-direction: row;
    align-items: flex-start;
    border: none;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    min-height: 0;

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
  min-height: 120px;

  & > div {
    position: relative;

    & > svg {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }
  }

  p {
    color: #000;
  }

  input {
    width: 100%;
    height: 42px;
    padding-left: 32px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    font-size: 12px;
    color: #3a3a3a;
    outline: none;
  }
`;

const SearchFormDate = styled.div<{ $startdate: boolean; $enddate: boolean; $starttime: string; $endtime: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & > div {
    width: 50%;
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-direction: column;

    .start-date {
      position: absolute;
      top: 13px;
      right: 91px;

      &::after {
        content: "~";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -10px;
        font-size: 10px;
        color: #3a3a3a;
      }

      label {
        background-color: ${(props) => (props.$startdate ? COLORS.MainColor : "")};
        border: ${(props) => (props.$startdate ? "none" : "")};
        color: ${(props) => (props.$startdate ? "#fff" : "")};
      }
    }

    .end-date {
      position: absolute;
      right: 21px;
      top: 13px;

      label {
        background-color: ${(props) => (props.$enddate ? COLORS.MainColor : "")};
        border: ${(props) => (props.$enddate ? "none" : "")};
        color: ${(props) => (props.$enddate ? "#fff" : "")};
      }
    }

    .react-datepicker__triangle::before,
    .react-datepicker__triangle::after {
      display: none;
    }
    .react-datepicker-popper {
      width: 100% !important;
      position: relative !important;
      inset: 0 !important;
      transform: none !important;
    }
    .react-datepicker__tab-loop {
      width: 100% !important;
      display: block !important;
    }
    .react-datepicker {
      width: 100%;
      border: 0;
    }
    .react-datepicker__month-container {
      width: 100%;
    }

    .react-datepicker__day-name {
      margin-top: 50px;
      font-size: 12px;
      color: #979797;
    }

    .react-datepicker__day {
      color: #434343;

      &:hover {
        background: none;
      }
    }
    .react-datepicker__day--disabled,
    .react-datepicker__day--outside-month {
      color: #aaaaaa;
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      width: calc((100% / 7) - (0.166rem * 2));
      line-height: 3;
    }

    .react-datepicker__day-name::after,
    .react-datepicker__day::after,
    .react-datepicker__day-name::after {
      content: "";
      display: block;
    }

    .react-datepicker__day--selected {
      position: relative;
      height: 100%;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0);
      color: #fff;

      &::before {
        content: "";
        width: calc(38.39px - 0.166rem);
        height: calc(38.39px - 0.166rem);
        display: block;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        background-color: ${COLORS.MainColor};
        z-index: -1;
        border-radius: 50%;
      }
    }

    .react-datepicker__navigation-icon--previous::before,
    .react-datepicker__navigation-icon--next::before {
      border-color: ${COLORS.MainColor};
    }

    .react-datepicker__month-container,
    .react-datepicker {
      background-color: rgba(0, 0, 0, 0);
    }

    .react-datepicker-popper[data-placement^="bottom"] {
      padding-top: 20px;
    }

    .react-datepicker__header {
      background-color: #fff;
    }

    .react-datepicker__day:focus-visible,
    react-datepicker__day--selected:focus-visible {
      border: none;
      outline: none;
    }

    .form-time-wrap {
      position: absolute;
      display: flex;
      align-items: center;
      padding-right: 20px;
      font-size: 12px;
      gap: 5px;
      top: 13px;
      right: 0;

      input[type="time"] {
        position: absolute;
        background: rgba(0, 0, 0, 0);
        width: 63px;
        height: 100%;
        border: none;
        opacity: 0;
      }

      input[type="time"]:nth-child(1) {
        left: 0;
      }

      input[type="time"]:nth-child(1) + label {
        background-color: ${(props) => (props.$starttime ? COLORS.MainColor : "")};
        border: ${(props) => (props.$starttime ? "none" : "")};
        color: ${(props) => (props.$starttime ? "#fff" : "")};
      }

      input[type="time"]:nth-child(4) {
        right: 37px;
      }

      input[type="time"]:nth-child(4) + label {
        background-color: ${(props) => (props.$endtime ? COLORS.MainColor : "")};
        border: ${(props) => (props.$endtime ? "none" : "")};
        color: ${(props) => (props.$endtime ? "#fff" : "")};
      }

      input[type="time"]::-webkit-inner-spin-button {
        display: none;
      }
      input[type="time"]::-webkit-calendar-picker-indicator {
        opacity: 0;
        width: 100%;
      }

      label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 30px;
        border: 1px solid #ddd;
        border-radius: 10px;
        font-size: 13px;
      }
    }
  }
`;

const SearchFormDistrict = styled.div`
  & > p {
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    max-width: 800px;
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
        padding: 7px 12px;
        cursor: pointer;
      }

      input[type="checkbox"]:checked + label {
        background-color: ${COLORS.MainColor};
        color: #fff;
      }
    }
  }
`;

const SubmitBtnBox = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: center !important;
  border-radius: 0 !important;
  border: none !important;
  padding: 0 !important;
  box-shadow: none !important;
  gap: 10px;

  button {
    padding: 10px;
    border-radius: 10px;
    color: #fff;
  }

  button:first-child {
    background: #999;
  }

  button:last-child {
    background: ${COLORS.MainColor};
  }
`;

export default SearchPopup;
