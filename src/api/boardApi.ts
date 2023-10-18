import { PUBLICAPI } from "../constants/AxiosInstance";

export const getPostList = async ({params, page} : POST_LIST_PARAMS_TYPES) => {
  console.log('실행')
  return await PUBLICAPI.get(`/search/${page}`, { params }).then((res) => {
    return res.data.data.content
  })
}