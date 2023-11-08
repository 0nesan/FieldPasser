import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage/MainPage";
import BoardPage from "../pages/BoardPage/BoardPage";
import BoardDetailPage from "../pages/BoardPage/BoardDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <MainPage /> },
      { path: "/board", element: <BoardPage /> },
      { path: "/board-details/:id", element: <BoardDetailPage /> },
    ],
  },
]);

export default router;
