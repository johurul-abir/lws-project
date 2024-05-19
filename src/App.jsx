import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
<link href="https://fonts.maateen.me/mukti/font.css" rel="stylesheet"></link>;

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
