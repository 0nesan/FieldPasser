import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../css/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "../store/modalStateSlice";
import { useEffect } from "react";
import { RootState } from "../store/store";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const searchModalState = useSelector((state: RootState) => state.modalState.modalState.searchModal);

  useEffect(() => {
    if (searchModalState && path !== "/") dispatch(modalToggle("searchModal"));
  }, [path, dispatch, searchModalState]);

  return (
    <Container>
      <section>
        <div>
          <h1
            onClick={() => {
              searchModalState && dispatch(modalToggle("searchModal"));
            }}
          >
            <Link to="/">필드패서</Link>
          </h1>
        </div>

        <ul>
          <li>
            <button>
              <Link to="">고객센터</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="">회원가입</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="">로그인</Link>
            </button>
          </li>
          <li>
            <button className="transfer-btn">
              <Link to="">양도하기</Link>
            </button>
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 12px 20px;
  border-bottom: 1px solid rgb(217, 217, 217);

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;

      h1 {
        width: 160px;
        height: 24px;
        background-image: url("./logo.png");
        background-size: cover;
        background-color: #ddd;

        a {
          text-indent: -9999px;
        }
      }
    }

    ul {
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        height: 32px;
        background: none;
        border: none;
        font-size: 15px;
      }

      .transfer-btn {
        width: 100px;
        background-color: ${COLORS.MainColor};
        border-radius: 10px;

        a {
          color: #fff;
        }
      }
    }
  }
`;
