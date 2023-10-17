/// <reference types="vite/client" />

interface CategoryIconPropsTypes {
  color: string;
  size: number;
}

interface CategoryBtnColors {
  futsal : string,
  soccer : string,
  basketball : string,
  badminton : string,
  tennis : string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string] : any;
}