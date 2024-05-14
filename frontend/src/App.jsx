import { useState } from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import "./App.css";
import Login from "./loginComponent/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./adminComponent/Content";
import TrackBus from "./adminComponent/TrackBus";
import UserContent from "./userComponent/UserContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Login />}></Route>
        <Route
          path="/admin/trackbus"
          element={<Content content={"trackbus"} />}
        ></Route>

        <Route
          path="/admin/adddriver"
          element={<Content content={"adddriver"} />}
        ></Route>

        <Route
          path="/admin/addbus"
          element={<Content content={"addbus"} />}
        ></Route>

        <Route
          path="/admin/driver"
          element={<Content content={"driver"} />}
        ></Route>

        <Route path="/admin/bus" element={<Content content={"bus"} />}></Route>

        <Route
          path="/trackbus"
          element={<UserContent content={"trackbus"} />}
        ></Route>

        <Route path="/bus" element={<UserContent content={"bus"} />}></Route>
        <Route
          path="/driver"
          element={<UserContent content={"driver"} />}
        ></Route>
        <Route
          path="/location"
          element={<UserContent content={"location"} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
