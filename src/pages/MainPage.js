import React, { useState } from "react";
import "../assets/css/mainPage.css";
import Attendence from "../components/tables/Attendence";
import CoScholasticAreas from "../components/tables/CoScholasticAreas";
import GradingScale from "../components/tables/GradingScale";
import ScholasticAreas from "../components/tables/ScholasticAreas";
import { downloadScoreCardPdf } from "../components/utils/DownloadPdf";

const MainPage = () => {
  const scoreCardId = "score_card_container";
  const [cumulativeData, setCumulativeData] = useState({
    grandTotal: 0,
    percentage: 0,
    rank: 10,
  });

  return (
    <div className="container-fluid">
      <div className="overall-container" id={scoreCardId}>
        <h1 className="main-heading">First Terminal Examination 2018-19</h1>
        <hr />
        <h3 className="sub-heading">Academic Performance</h3>
        <hr />
        <div className="row">
          <div className="col-12 col-lg-7 table-responsive">
            <ScholasticAreas
              cumulativeData={cumulativeData}
              setCumulativeData={setCumulativeData}
            />
          </div>

          <div className="col-12 col-lg-5 table-responsive">
            <CoScholasticAreas />
          </div>
          <div className="col-12 table-responsive">
            <Attendence />
          </div>
          <div className="col-12 d-flex flex-row justify-content-between">
            <p className="sub-heading">
              C.G.P : {(cumulativeData.percentage / 10).toFixed(2)}
            </p>
            <p className="sub-heading">Grade : A1</p>
          </div>
          <div className="col-12">
            <p className="normal-text text-left">
              Teacher's Remark - <span className="font-weight-bold">Good</span>
            </p>
          </div>
          <div className="col-12 d-flex flex-row justify-content-between signature">
            <p className="ml-3">Teacher's Signature</p>
            <p>Parents's Signature</p>
            <p>Principal's Signature</p>
          </div>
          <div className="col-12 table-responsive">
            <GradingScale />
          </div>
          <div className="col-12">
            <hr />
            <h5 className="quote-text font-weight-bold">
              Our Parents are seen God on the Earth.
            </h5>
            <hr />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <button
          type="button"
          class="btn btn-dark mb-3"
          onClick={(e) => downloadScoreCardPdf(e, scoreCardId)}
        >
          Get PDF
        </button>
      </div>
    </div>
  );
};

export default MainPage;
