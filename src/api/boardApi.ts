import { PUBLICAPI } from "../constants/AxiosInstance";

export const getPostList = async (params: POST_LIST_PARAMS_TYPES, page = 1) => {
  return await PUBLICAPI.get(`/search/${page}`, { params }).then((res) => {
    return res.data.data.content
  })
}