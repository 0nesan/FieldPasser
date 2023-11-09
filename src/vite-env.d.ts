/// <reference types="vite/client" />

interface CATEGORY_ICON_PROPS_TYPES {
  size?: number;
  fill?: string;
  stroke?: string;
}
interface CATEGORY_BTN_COLORS_TYPE {
  풋살장: string;
  축구장: string;
  농구장: string;
  배드민턴장: string;
  테니스장: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}
interface POST_TYPE {
  blind: boolean;
  boardId: number;
  categoryName: string;
  content: string;
  deleteCheck: boolean;
  districtName: string;
  endTime: string;
  imageUrl: string;
  memberId: string;
  memberName: string;
  memberNickName: string;
  myBoard: boolean;
  phone: string;
  price: number;
  registerDate: string;
  startTime: string;
  title: string;
  transactionStatus: string | null;
  viewCount: number;
  wishCount: number;
  likeBoard: boolean;
}
interface GET_BOARD_LIST_PARAMS_TYPES {
  params: BOARD_PARAMS_TYPE;
  page: number;
}

interface BOARD_PARAMS_TYPE {
  title?: string;
  categoryName?: string;
  districtName?: string;
  startDate?: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [props: string]: any;
}

interface INFINITYSCROLL_PROPS_TYPE {
  boardListPrams: BOARD_PARAMS_TYPE;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
