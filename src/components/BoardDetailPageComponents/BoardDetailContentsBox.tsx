import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { getPostDetail } from "../../api/boardApi";
import { useParams } from "react-router-dom";
import { Harticon } from "../../constants/Icons/boardIcons";
import { COLORS } from "../../css/GlobalStyle";
import useDateFormat from "../../hooks/useDateFormat";

const BoardDetailContentsBox = () => {
  const location = useParams();
  const [detailData, setDetailData] = useState<POST_TYPE>();
  const [loading, setLoading] = useState(false);
  const date = useDateFormat(detailData ? detailData.startTime : "");

  const getDetailData = useCallback(async () => {
    try {
      setLoading(true);
      const postData = await getPostDetail(location.id as string);
      setDetailData(postData);
    } catch (err) {
      if (err instanceof Error) return err.message;
    } finally {
      setLoading(false);
    }
  }, [location.id]);

  useEffect(() => {
    getDetailData();
  }, [getDetailData]);

  return (
    <>
      {detailData && !loading && (
        <>
          <BoardDetailInfoBox>
            <BoardDetailTitleLine>
              <h2>{detailData.title}</h2>
              <button onClick={() => console.log("좋아요 버튼 기능 넣기")}>
                {detailData.likeBoard ? (
                  <Harticon size={20} stroke={COLORS.MainColor} fill={COLORS.MainColor} />
                ) : (
                  <Harticon size={20} stroke="#aaa" fill="#fff" />
                )}
              </button>
            </BoardDetailTitleLine>

            <BoardDetailDateLine>
              <p>
                <span>예약일&#58;{date}</span>
                <span>{detailData.price.toLocaleString()}</span>
              </p>
            </BoardDetailDateLine>

            <BoardDetailIdLine>
              <p>
                <span>
                  {detailData.memberName} {detailData.memberId}
                </span>
                <span>조회수 {detailData.viewCount}</span>
                <span>
                  <Harticon size={14} fill="#fff" stroke="#aaa" />
                  {detailData.wishCount}
                </span>
              </p>
            </BoardDetailIdLine>
          </BoardDetailInfoBox>

          <BoardDetailContents></BoardDetailContents>
        </>
      )}
    </>
  );
};

const BoardDetailInfoBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BoardDetailTitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }
`;

const BoardDetailDateLine = styled.div`
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:last-child {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

const BoardDetailIdLine = styled.div`
  p,
  span {
    display: flex;
    align-items: center;
  }

  p {
    gap: 10px;
  }

  span {
    gap: 5px;
  }
`;

const BoardDetailContents = styled.section``;

export default BoardDetailContentsBox;
