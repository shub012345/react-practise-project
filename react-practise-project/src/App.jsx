import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UseReducerHook from "./componets/useReducerHook";
// import ThemeCode from "./componets/ThemeCode";
import TodoList from "./componets/TodoList";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
