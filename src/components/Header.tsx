import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../css/GlobalStyle";

const Header = () => {
  return (
    <Container>
      <section>
        <div>
          <h1>
            <Link to="/">필드패서</Link>
          </h1>
        </div>

        <ul>
          <li>
            <button>
              <Link to=''>고객센터</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to=''>회원가입</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to=''>로그인</Link>
            </button>
          </li>
          <li>
            <button className='transfer-btn'>
              <Link to=''>양도하기</Link>
            </button>
          </li>
        </ul>
      </section>
    </Container>
  )
};

export default Header;

const Container = styled.header`
  display:flex;
  align-items: center;
  height:60px;
  padding:12px 20px;
  border:1px solid rgb(217, 217, 217);

  section {
    display:flex;
    justify-content: space-between;
    align-items: center;

    div {
      display:flex;
      align-items: center;

      h1 {
        width:160px;
        height:24px;
        background-image:url('./logo.png');
        background-size:cover;

        a {
          text-indent:-9999px;
        }
      }
    }

    ul {
      display:flex;
      align-items: center;
      gap:10px;

      button {
        height:32px;
        background:none;
        border:none;
        font-size:15px;
      }

      .transfer-btn {
        width:100px;
        background-color:${COLORS.MainColor};
        border-radius:10px;
        
        a {
          color:#fff;
        }
      }
    }
  }
`