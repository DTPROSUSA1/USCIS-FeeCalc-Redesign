import React, { useState, useEffect  } from "react";
import "./App.css";
import "./styles/common.css";
import "./styles/feeCalc.min.css";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import FormAccordion from "./components/FormAccordion";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";

function FeeCal() {
  const [showAccordion, setShowAccordion] = useState(false);
  const [selectedFormDetails, setSelectedFormDetails] = useState(null);
  const [showElements, setShowElements] = useState(false);
  const [globalConfig, setGlobalConfig] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/config')
      .then((response) => response.json()) // Parse the response as JSON
      .then((config) => {
        setGlobalConfig(config['General']);
      })
      .catch((error) => console.error('Error loading configuration:', error));
  }, []);

  const handleFormSubmit = (formName) => {
    if (formName) {
      fetch(`http://localhost:3000/api/form-details/${formName}`)
        .then((response) => response.json())
        .then((data) => {
          setSelectedFormDetails(data);
          setShowElements(true); // Set the reset function
        })
        .catch((error) => console.error('Error fetching form details:', error));
      setShowAccordion(true);
    }
  };

  const handleStartOver = () => {
    if (showElements) {
      setShowElements(false); // Call the reset function from the Dropdown
    }
    setSelectedFormDetails(null); // Reset the selected form details
    setShowAccordion(false); // Hide the accordion
  };
  
  return (
    <div className="App">
      <Header />
      <div id="guideContainerForm">
        <div className="guideContainerWrapperNode guideContainerNode container">
           <Accordion showElements={showElements}/>
          {!showElements && <p>For forms not listed, please refer to the Form Instructions or our <a href="https://www.uscis.gov/forms/filing-fees" data-clickable-id="clickable-464" target="_blank" title="https://www.uscis.gov/forms/filing-fees">Filing Fees</a> page.</p>}
          {!showElements && <Dropdown onFormSubmit={handleFormSubmit} />}
          {showAccordion && selectedFormDetails && (
            <FormAccordion formDetails={selectedFormDetails} globalConfig={globalConfig} />
          )}
          {showElements && <button style={{marginBottom: "5rem"}} onClick={handleStartOver}>Start Over</button>}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default FeeCal;
