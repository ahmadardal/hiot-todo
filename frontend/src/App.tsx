import { RouterProvider } from "react-router-dom";
import TodoContextProvider from "./context/TodoContext";
import AppRouter from "./utils/AppRouter";

function App() {
  return (
    <div className="background">
      <div className="white-panel">
        <TodoContextProvider>
          <RouterProvider router={AppRouter} />
        </TodoContextProvider>
      </div>
    </div>
  );
}

export default App;
