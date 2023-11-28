import React, { useState } from "react";
import "./App.css";
import "./styles/common.css";
import "./styles/feeCalc.min.css";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import FormAccordion from "./components/FormAccordion";
import Dropdown from "./components/Dropdown";

function App() {
  const [showAccordion, setShowAccordion] = useState(false);
  const [selectedFormDetails, setSelectedFormDetails] = useState(null);

  const handleFormSubmit = (formName) => {
    // Fetch form details
    fetch(`/api/form-details/${formName}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedFormDetails(data);
        setShowAccordion(true);
      })
      .catch((error) => console.error('Error fetching form details:', error));
  };

  return (
    <div className="App">
      <Header />
      {/* <div className="guidetextdraw guidefield guide-1599109936102">
        <div className="guideFieldNode guideTextDraw textdraw_2933328951599109882782 formTitle guideStaticText af-field-filled"> 
          <h1 className="title">Calculate Your Fees</h1>
        </div>
      </div> */}
      <div id="guideContainerForm">
        <div className="guideContainerWrapperNode guideContainerNode container">
          <Accordion/>
          <Dropdown onFormSubmit={handleFormSubmit} />
          {showAccordion && selectedFormDetails && (
            <FormAccordion formDetails={selectedFormDetails} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
