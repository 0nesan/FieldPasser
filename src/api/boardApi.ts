import { PUBLICAPI } from "../constants/AxiosInstance";

export const getPostList = async ({ params, page }: GET_BOARD_LIST_PARAMS_TYPES) => {
  return await PUBLICAPI.get(`/search/${page}`, { params }).then((res) => {
    return res.data.data;
  });
};
