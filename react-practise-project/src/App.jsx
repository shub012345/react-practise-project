import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UseReducerHook from "./componets/useReducerHook";
// import ThemeCode from "./componets/ThemeCode";
// import TodoList from "./componets/TodoList";
import PasswordValidator from "./componets/PasswordValidator";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PasswordValidator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
