import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useRandomImage from "../../hooks/useRandomImage";
import useDateFormat from "../../hooks/useDateFormat";
import { Harticon } from "../../constants/Icons/boardIcons";

interface BoardItemsProps {
  list: POST_TYPE;
}

const BoardItem: React.FC<BoardItemsProps> = ({ list }) => {
  const navigate = useNavigate();
  const randomImageUrl = useRandomImage(list.categoryName, list.boardId);
  const date = useDateFormat(list.startTime);

  return (
    <BoxItemWrap $blind={list.transactionStatus} onClick={() => navigate(`/board-details/${list.boardId}`)}>
      <ImageBox>
        <img
          src={list.imageUrl ? list.imageUrl : randomImageUrl}
          // onError={(e) => handleImgError(e, list.categoryName, list.boardId)}
          alt="이미지"
        />
      </ImageBox>
      <InfoBox>
        <p className="info-title">{list.title}</p>
        <p className="info-price">{list.price.toLocaleString()} 원</p>
        <p className="info-district">
          {list.districtName} {date}
        </p>
        <p className="info-etc-section">
          <span>조회수</span>
          <span>{list.viewCount}</span>
          <span>
            <Harticon size={13} fill="#fff" stroke="#aaa" />
          </span>
          <span>{list.wishCount}</span>
        </p>
      </InfoBox>
      {list.transactionStatus === "판매 완료" && <div className="sold_out">판매 완료</div>}
    </BoxItemWrap>
  );
};

export default BoardItem;

const BoxItemWrap = styled.li<{ $blind: string | null }>`
  width: calc(100% / 3);
  padding: 10px;
`;
const ImageBox = styled.figure`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  margin-bottom: 20px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;

  p {
    color: #000;
    font-weight: 400;
  }

  .info-price {
    font-weight: 900;
  }

  .info-district {
    font-size: 14px;
  }

  .info-etc-section {
    display: flex;
    gap: 5px;
    font-size: 14px;

    span {
      color: #aaa;
    }

    span:nth-child(3) {
      margin-left: 5px;
    }
  }
`;
