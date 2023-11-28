import React, { useState } from 'react';
import './../styles/common.css';
import './../styles/theme.css';

const Accordion = () => {
    const [state, setState] = useState({
        showOne: false,
        showTwo: false,
        arrowUpOne: false,
        arrowUpTwo: false
    });

    const handleShowOne = () => {
        console.log("handle show one fired");
        setState(prevState => ({
            ...prevState,
            showOne: !prevState.showOne,
            arrowUpOne: !prevState.arrowUpOne
        }));
    };

    const handleShowTwo = () => {
        console.log("handle show two fired");
        setState(prevState => ({
            ...prevState,
            showTwo: !prevState.showTwo,
            arrowUpTwo: !prevState.arrowUpTwo
        }));
    };

      return(  
<div style={{marginBottom: "25px", paddingBottom: "25px", display: "block", border: "none"}}>
  <span id="accordion-navigators">Calculate Your Fees</span>
<div className="guidePanelNode parentWhatFeeCalcPanel" id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel__" onClick={handleShowOne}>                     
<div className="accordion">
<div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel___layoutContainer" className="row guideLayout guideAccordionLayout" >
<div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel___layoutPanelContainer" className="col-md-12 PanelContainer">
<div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel___guide-item-container" className="accordion-navigators">
<div id="im_guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__" style={{display: "none"}} data-guide-template-marker="true"></div>
<div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel___guide-item" data-guide-parent-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel__" className="">
<div className="guideHeader" role="heading">
<a role="button" tabindex="0" aria-selected="true" aria-expanded="true" data-guide-toggle="accordion-tab" data-guide-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__">
<span className={`guideSummary ${state.arrowUpOne ? "dtph-active": ""}`} data-guide-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__" id="dtph-us-gov-desc-1">What is the Fee Calculator?</span>
</a>
</div>

<div className="row" style= {{ display: state.showOne === false? 'none': 'block', marginLeft: "30px"}}>
<div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel-guidetextdraw___guide-item" className="col-md-12 active" data-guide-parent-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__">
<div className="guidetextdraw guidefield">
<div className="guideFieldNode guideTextDraw whatsFeeCalcText guideStaticText af-field-filled" id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel-guidetextdraw__" style={{fontSize:"16px"}} data-guide-view-bind="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel-guidetextdraw__" data-disabled="false">
<p>This tool will ask questions to help determine where to file your forms; however,&nbsp;it does not store answers to the questions or any other personal information.</p>
<p>We developed the Fee Calculator to help reduce the number of rejected applications due to incorrect filing fees. This calculator will always have the most up-to-date fee information and can determine the exact filing fees for any&nbsp;form processed at a&nbsp;&nbsp;<a rel="nofollow" target="_blank" href="https://www.uscis.gov/forms/forms-processed-uscis-lockbox-facilities" data-clickableid="clickable-112" data-clickable-id="clickable-115"><b>USCIS Lockbox Facility</b></a>.</p>
<p>If you would like to provide feedback on this USCIS.gov website, you may email us at <a href="mailto:uscis.webmaster@uscis.dhs.gov" target="_self" data-clickable-id="clickable-116"><b>uscis.webmaster@uscis.dhs.gov</b></a>. Para español <a href="mailto:uscis.espanol-webmaster@uscis.dhs.gov" target="_self" data-clickable-id="clickable-117"><b>uscis.espanol-webmaster@uscis.dhs.gov</b></a>.</p>
<p>Do not send information about specific cases to this address. We only accept website-related comments.</p>
</div></div>
</div> 
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="guidePanelNode parentWhatFeeCalcPanel  " id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel__" onClick={handleShowTwo} >                
<div className="accordion">
<div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel___layoutContainer" className="row guideLayout guideAccordionLayout" >
<div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel___layoutPanelContainer" className="col-md-12 PanelContainer">
<div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel___guide-item-container" className="accordion-navigators">
<div id="im_guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__" style={{display: "none"}} data-guide-template-marker="true"></div><div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel___guide-item" data-guide-parent-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel__" className="">
<div className="guideHeader" role="heading">
<a role="button" tabindex="0" aria-selected="true" aria-expanded="true" data-guide-toggle="accordion-tab" data-guide-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__">
<span className={`guideSummary ${state.arrowUpTwo ? "dtph-active": ""}`} data-guide-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__" id="dtph-us-gov-desc-2">How does it work?</span>
</a>
</div>

<div className="row" style= {{ display: state.showTwo === false? 'none': 'block', marginLeft: "30px"}}>
<div id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel-guidetextdraw___guide-item" className="col-md-12 active" data-guide-parent-id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel__">
<div className="guidetextdraw guidefield">
<div className="guideFieldNode guideTextDraw whatsFeeCalcText guideStaticText af-field-filled" id="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel-guidetextdraw__" style={{fontSize:"16px"}} data-guide-view-bind="guideContainer-rootPanel-panel-parentWhatFeeCalcPanel-whatsfeecalcpanel-guidetextdraw__" data-disabled="false">
<p>This tool will ask questions to help determine where to file your forms; however,&nbsp;it does not store answers to the questions or any other personal information.</p>
<p>We developed the Fee Calculator to help reduce the number of rejected applications due to incorrect filing fees. This calculator will always have the most up-to-date fee information and can determine the exact filing fees for any&nbsp;form processed at a&nbsp;&nbsp;<a rel="nofollow" target="_blank" href="https://www.uscis.gov/forms/forms-processed-uscis-lockbox-facilities" data-clickableid="clickable-112" data-clickable-id="clickable-115"><b>USCIS Lockbox Facility</b></a>.</p>
<p>If you would like to provide feedback on this USCIS.gov website, you may email us at <a href="mailto:uscis.webmaster@uscis.dhs.gov" target="_self" data-clickable-id="clickable-116"><b>uscis.webmaster@uscis.dhs.gov</b></a>. Para español <a href="mailto:uscis.espanol-webmaster@uscis.dhs.gov" target="_self" data-clickable-id="clickable-117"><b>uscis.espanol-webmaster@uscis.dhs.gov</b></a>.</p>
<p>Do not send information about specific cases to this address. We only accept website-related comments.</p>
</div></div>
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
    }
export default Accordion;

  // className="accordion-navigators" style={{backgroundColor: rgb(249, 249, 249)}}