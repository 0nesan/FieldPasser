import styled from "styled-components";

const MainBanner = () => {
  return (
    <Banner />
  )
}

export default MainBanner;

const Banner = styled.section`
  position:relative;
  max-width:1024px;
  width:100%;
  height:312px;
  background-image:url(/banner2.png);
  background-size:cover;
  background-position:center center;
  color:#fff;
  font-size:30px;
  font-weight:900;
  line-height:40px;

  &::after {
    content:'';
    display:block;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(90deg, rgba(0,0,0,.9),rgba(82,82,82,.075))
  }
`
