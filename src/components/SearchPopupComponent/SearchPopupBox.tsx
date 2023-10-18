import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
interface propsType {
  onClose: () => void
}

const SearchPopup = (props: propsType) => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<BOARD_PARAMS_TYPE> = (data: BOARD_PARAMS_TYPE) => {
    const districtArr = ['수원', '화성']

    for (const x of districtArr) if (data[x] === true) data.districtName += `,${x}`
    data.districtName = data.districtName?.slice(10)
  }
  console.log('dd')

  return (
    <SearchPopupWrap>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <CloseBtn onClick={props.onClose}>닫기</CloseBtn>

        <SearchFormTitle>
          <p>찾는 구장을 검색해주세요</p>
          <input {...register('title')} />
        </SearchFormTitle>
        <input type='checkbox' id='suwon' {...register('수원')} />
        <label htmlFor="suwon">수원</label>

        <input type='checkbox' id='hawsung' {...register('화성')} />
        <label htmlFor="hawsung">화성</label>

        <button type="submit">제출 test</button>
      </SearchForm>
    </SearchPopupWrap>
  )
}

const SearchPopupWrap = styled.section`
  position:fixed;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  background:#fff;
  z-index: 9999;
`

const CloseBtn = styled.button`
  margin-bottom: 50px;
`

const SearchForm = styled.form`
  max-width:1024px;
  margin:0 auto;
  padding-top:50px;
`

const SearchFormTitle = styled.div`

`

export default SearchPopup;