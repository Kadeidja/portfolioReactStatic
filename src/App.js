import './styles/allstyles.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/constructionroute";

function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;