import { useMemo } from 'react';

interface imageArrTypes {
  배드민턴장 : string[],
  농구장 : string[],
  축구장 : string[],
  테니스장 : string[],
  풋살장 : string[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop:string] : any
}

const useRandomImage = (category:string, imgNum:number) => {
  const randomNum = imgNum % 3;
  const publicPath = import.meta.env.BASE_URL;

  const images:imageArrTypes = {
    배드민턴장: ['badminton0.png', 'badminton1.png', 'badminton2.png'],
    농구장: ['basketball0.png', 'basketball1.png', 'basketball2.png'],
    축구장: ['soccer0.png', 'soccer1.png', 'soccer2.png'],
    테니스장: ['tennis0.png', 'tennis1.png', 'tennis2.png'],
    풋살장: ['futsal0.png', 'futsal1.png', 'futsal2.png'],
  };

  const selectedImage = useMemo(() => {
    return publicPath + images[category][randomNum];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, randomNum, publicPath]);

  return selectedImage;
};

export default useRandomImage;