import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import PageNotFound from "../pages/PageNotFound";

const MainRouter = () => {
  const jwtToken = localStorage.getItem("jwtToken");
  

  console.log("jwt token from router", jwtToken);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/score_card"
            element={jwtToken !== "" ? <MainPage /> : <PageNotFound />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
