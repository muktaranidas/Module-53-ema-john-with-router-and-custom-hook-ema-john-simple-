import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
  ]);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default App;
