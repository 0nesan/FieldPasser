import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage/MainPage";
import BoardPage from "../pages/BoardPage/BoardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <MainPage /> },
      { path: '/board', element: <BoardPage /> }
    ],
  },
]);

export default router;
