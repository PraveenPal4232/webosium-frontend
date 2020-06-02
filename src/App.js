import React from "react";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import ReactGa from "react-ga";

import BottomNavigation from "./components/Common/BottomNavigation";
import TopNavigation from "./components/Common/TopNavigation";
import MainContainer from "./components/Common/MainContainer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import globalStore from "./stores/globalStore";
const store = createStore(globalStore);

ReactGa.initialize(process.env.REACT_APP_GA_ID);

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <BrowserRouter>
          <TopNavigation />
          <MainContainer />
          <BottomNavigation />
          <ToastContainer />
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
