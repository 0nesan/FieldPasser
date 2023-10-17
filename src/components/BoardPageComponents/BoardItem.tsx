import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import useRandomImage from "../../hooks/useRandomImage";
import useDateFormat from "../../hooks/useDateFormat";
import { Harticon } from "../../constants/Icons/boardIcons";

interface BoardItemsProps {
  list: POST_TYPE
}

const BoardItem: React.FC<BoardItemsProps> = ({ list }) => {
  const navigate = useNavigate()
  const randomImageUrl = useRandomImage(list.categoryName, list.boardId)
  const date = useDateFormat(list.startTime)

  return (
    <BoxItemWrap
      $blind={list.transactionStatus}
      onClick={() => navigate(`/board-details/${list.boardId}`)}
    >
      <div className="imgae_wrap">
        <img
          src={list.imageUrl ? list.imageUrl : randomImageUrl}
          // onError={(e) => handleImgError(e, list.categoryName, list.boardId)}
          alt="이미지"
        />
      </div>
      <div className="info_wrap">
        <p className="title">{list.title}</p>
        <p className="price">{list.price.toLocaleString()} 원</p>
        <p className="date">
          {list.districtName} {date}
        </p>
        <p className="view_like">
          <span>조회수</span>
          <span>{list.viewCount}</span>
          <span>
            <Harticon size={16} />
          </span>
          <span>{list.wishCount}</span>
        </p>
      </div>
      {list.transactionStatus === '판매 완료' && <div className="sold_out">판매 완료</div>}
    </BoxItemWrap>
  )
}

export default BoardItem

const BoxItemWrap = styled.li<{ $blind: string | null }>`

`