import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header2 from "./Components/Header.js"
import Home from "./Components/Home.js";
import Items from './Components/Items.js';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* <Header2 /> */}
        <Routes>
          <Route path="/" element={<Header2 />}>
            <Route index element={<Home />} />
            <Route path="/Items" element={<Items />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Home />
      <Items />

    </div>
  );
}

export default App;
