import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseReducerHook from "./componets/useReducerHook";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseReducerHook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
