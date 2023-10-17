/// <reference types="vite/client" />

interface CATEGORY_ICON_PROPS_TYPES {
  color?: string;
  size?: number;
}
interface CATEGORY_BTN_COLORS_TYPE {
  futsal : string,
  soccer : string,
  basketball : string,
  badminton : string,
  tennis : string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string] : any;
}
interface POST_TYPE {
  blind: boolean
  boardId: number
  categoryName: string
  content: string
  deleteCheck: boolean
  districtName: string
  endTime: string
  imageUrl: string
  memberId: string
  memberName: string
  memberNickName: string
  myBoard: boolean
  phone: string
  price: number
  registerDate: string
  startTime: string
  title: string
  transactionStatus: string | null
  viewCount: number
  wishCount: number
  likeBoard: boolean
}
interface POST_LIST_PARAMS_TYPES {
  title?:string
  categoryName?: string
  districtName?: string
  startTime?:string
  endTime?:string
}