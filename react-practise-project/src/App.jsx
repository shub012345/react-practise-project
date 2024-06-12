import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UseReducerHook from "./componets/useReducerHook";
// import ThemeCode from "./componets/ThemeCode";
// import TodoList from "./componets/TodoList";
// import PasswordValidator from "./componets/PasswordValidator";
import FormSet from "./componets/FormSet";
import TableSet from "./componets/TableSet";
import Practisetable from "./componets/Practisetable";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Practisetable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
