import React, { useState, useEffect } from 'react';
import "../styles/common.css"
import "../styles/feeCalc.min.css"
const Dropdown = ({  onFormSubmit, formDetails }) => {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState('');
  const [selectedFormName, setSelectedFormName] = useState('');
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    // Assuming you have an endpoint that lists the names of all YAML files
    fetch('http://localhost:3001/api/forms')
      .then((response) => response.json())
      .then((data) => setForms(data))
      .catch((error) => console.error('Error fetching forms:', error));
  }, []);


  const handleChange = (event) => {
    const formNumber = event.target.value;
    setSelectedForm(formNumber);
    fetch(`http://localhost:3001/api/form-details/${formNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedFormName(data['Form Name']); // Assuming the API returns an object with a formName property
      })
      .catch((error) => console.error(`Error fetching form details for ${formNumber}:`, error));
  };

  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = () => {
    if (selectedForm) {
      onFormSubmit(selectedForm);
    }
  };

  return (
    <div className='col-md-12' id='guideContainer-rootPanel-panel-panel_185352355_copy-guidedropdownlist_82___guide-item'>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6  guideFieldNode guideDropDownList formNumberSelection formNumberDrpdown defaultFieldLayout af-field-empty' id='guideContainer-rootPanel-panel-panel_185352355_copy-guidedropdownlist_82__'>
            <div className='guideFieldLabel top'> 
              <label htmlFor="form-select">Select a form</label>
            </div>
            <div className='guideFieldWidget dropDownList'>
              <select
                className={`hiddenDropDownClass ${isActive ? 'active' : ''}`}
                id="form-select"
                value={selectedForm}
                onChange={handleChange}
                onClick={handleDropdownClick}
              >
                <option value="" disabled style={{display: "none"}}></option>
                {forms.map((formName) => (
                  <option key={formName} value={formName}>
                    {formName}
                  </option>
                ))}
              </select>
          </div>
          </div>
          <div className='col-md-6 guideFieldNode guideTextDraw formNumberSelectionDesc descriptionText guideStaticText af-field-filled'>
                  {selectedForm && (
                  <div>
                    <span>{selectedForm}, {selectedFormName || ''}</span>
                  </div>
                )}
              </div>
        </div>

      </div>
      <div >
        <div className='guidebutton guidefield guide-1595896534762'>
          <div className='guideFieldNode guideButton formSelectionSubmit submit defaultFieldLayout af-field-empty' id='guideContainer-rootPanel-panel-guidebutton_copy_cop__'>
            <div className='guideFieldWidget guideFieldButtonWidget xfaButton' id='guideContainer-rootPanel-panel-guidebutton_copy_cop___widget'> 
              <button style={{marginBottom: "5rem"}} className='button-default button-medium Button' type="button" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
