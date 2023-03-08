import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import GlobalStyle from './styles/global';
import Root from "./routes/root";
import Modal from "./routes/modal";

export default function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/:cardId",
          element: <Modal />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  )
}
