import React, { useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import './../styles/common.css';
import './../styles/theme.css';

const FormAccordion = ({ formDetails }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [state, setState] = useState({
    arrowUpOne: false,
    });
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  console.log(formDetails['Filing Eligibility']);
  // Ensure formDetails['I-130'] exists and has 'Filing Eligibility'
  const filingEligibilityDetails = formDetails['Filing Eligibility']
    ? formDetails['Filing Eligibility']
    : null;

  if (!filingEligibilityDetails) {
    return <div>Loading...</div>; // Show this message until the data is available
  }

  // Convert object to array if it's not already
  const filingEligibilityArray = Array.isArray(filingEligibilityDetails)
    ? filingEligibilityDetails
    : Object.keys(filingEligibilityDetails).map(key => filingEligibilityDetails[key]);

  const filingEligibilityContent = filingEligibilityArray.map((eligibilityItem, index) => {
    const sanitizedContent = sanitizeHtml(eligibilityItem.name, {
        allowedTags: false,
        allowedAttributes: false
    });

    return (
      <div key={index} className="guidePanelNode parentWhatFeeCalcPanel" onClick={() => toggleAccordion(index)}>
        <div className="accordion">
          <div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel___layoutContainer" className="row guideLayout guideAccordionLayout" >
            <div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel___layoutPanelContainer" className="col-md-12 PanelContainer">
              <div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel___guide-item-container" className="accordion-navigators">
              <div id="im_guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__" style={{display: "none"}} data-guide-template-marker="true"></div>
              <div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel___guide-item" data-guide-parent-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel__" className="">
                <div className="guideHeader" role="heading">
                  <a role="button" tabIndex="0" aria-selected={activeIndex === index} aria-expanded={activeIndex === index} data-guide-toggle="accordion-tab" data-guide-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__">
                    <span dangerouslySetInnerHTML={{ __html: sanitizedContent }}  className={`guideSummary ${state.arrowUpOne ? "dtph-active": ""} ${activeIndex === index ? 'dtph-active' : ''}`} data-guide-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__" id="dtph-us-gov-desc-1">
                    </span>
                  </a>
                </div>
                <div className="row" style={{ display: activeIndex === index ? 'block' : 'none', marginLeft: '30px' }}>
                  <div className="col-md-12 active">
                    <div className="guidetextdraw guidefield">
                      <p>{eligibilityItem.Fee['Paper Filing']}</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div style={{ marginBottom: '25px', paddingBottom: '25px', display: 'block', border: 'none' }}>
      <span id="accordion-navigators">{formDetails["Form Number"]}, {formDetails['Form Name']}</span>
      {filingEligibilityContent}
    </div>
  );
};

export default FormAccordion;
