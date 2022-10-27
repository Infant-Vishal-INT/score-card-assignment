import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ScoreCardPage from "../pages/ScoreCardPage";
import PageNotFound from "../pages/PageNotFound";

const MainRouter = () => {
  const jwtToken = localStorage.getItem("jwtToken");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/score_card"
            element={jwtToken !== "" ? <ScoreCardPage /> : <PageNotFound />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
