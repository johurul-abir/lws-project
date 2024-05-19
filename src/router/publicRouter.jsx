import Layout from "../layout/Layout";
import Home from "../pages/home/Home";

const publicRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

//export default
export default publicRouter;
