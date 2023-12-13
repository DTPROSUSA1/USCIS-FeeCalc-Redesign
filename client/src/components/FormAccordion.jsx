import React, { useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import './../styles/common.css';
import './../styles/theme.css';

const FormAccordion = ({ formDetails, globalConfig }) => {
  // Initialize with an object where each key corresponds to a panel index, all set to false
  const [openAccordions, setOpenAccordions] = useState({});
  const fileOnlineDetails = formDetails['File Online'];

  const getFeeString = (feeObject) => {
    return Object.entries(feeObject).map(([key, value]) => `${key}: ${value}`).join(', ');
  };

  // Toggle the state of an individual accordion panel
  const toggleAccordion = (index) => {
    setOpenAccordions(prevOpenAccordions => ({
      ...prevOpenAccordions,
      // Toggle boolean value of the current panel or set to true if it was undefined
      [index]: !prevOpenAccordions[index]
    }));
  };
  const replacePlaceholderWithLink = (text, config) => {
    if (!text || typeof text !== 'string') {
      return ''; // Return an empty string if text is undefined or not a string
    }
    
    // Replace placeholders with links
    const linkedText = text.replace(/\$\{(.*?)\}/g, (match, key) => {
      const url = config[key]?.url;
      const label = config[key]?.display_label || key;
      if (url) {
        return `<a href="${url}" target="_blank">${label}</a>`;
      }
      return match;
    });
  
    // Replace semicolons with <br /> tags
    const stringWithBreaks = linkedText.replace(/;/g, ';<br />');
  
    return stringWithBreaks;
  };
  // Ensure formDetails['Filing Eligibility'] exists and has 'Filing Eligibility'
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
    const replacedName = replacePlaceholderWithLink(eligibilityItem.name, globalConfig);
    const replacedDetails = replacePlaceholderWithLink(eligibilityItem.details, globalConfig);
    const feeString = getFeeString(eligibilityItem.Fee);
    const sanitizedName = sanitizeHtml(replacedName, {
      allowedTags: false,
      allowedAttributes: { 'a': ['href', 'target'] }
    });
    const sanitizedDetails = sanitizeHtml(replacedDetails, {
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
            <a role="button" tabIndex="0" aria-selected={openAccordions[index]} aria-expanded={openAccordions[index]} data-guide-toggle="accordion-tab">
              <span dangerouslySetInnerHTML={{ __html: sanitizedName }}  className={`guideSummary ${openAccordions[index] ? "dtph-active" : ""}`} id='dtph-us-gov-desc-1'/>
            </a>
          </div>
          <div className="row" style={{ display: openAccordions[index] ? 'block' : 'none', marginLeft: '30px' }}>
            <div className="col-md-12 active">
              <div className="guidetextdraw guidefield">
              <p dangerouslySetInnerHTML={{ __html: sanitizedDetails }}></p>
              <p dangerouslySetInnerHTML={{ __html: feeString }}></p>
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
      {fileOnlineDetails && (
        <button style={{marginTop: "4rem"}}
          className="iconButton-label" 
          onClick={() => window.open(fileOnlineDetails.url, '_blank')}
        >
          {fileOnlineDetails.display_label}
        </button>

      )}
    </div>
  );
};

export default FormAccordion;
