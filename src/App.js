import React from "react";
import MainPage from "./screens/MainPage";
import AdaptivePage from "./screens/AdaptivePage";
import ArtificialPage from "./screens/ArtificialPage";
import Design from "./screens/DesignPage";

const App = () => {
  return (
    <div className="app">
      <MainPage />
      <AdaptivePage />
      <ArtificialPage />
      <Design />
    </div>
  );
};

export default App;
