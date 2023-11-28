import React, { useState, useEffect } from 'react';

const Dropdown = ({ onFormSubmit }) => {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState('');

  useEffect(() => {
    // Assuming you have an endpoint that lists the names of all YAML files
    fetch('/api/forms')
      .then((response) => response.json())
      .then((data) => setForms(data))
      .catch((error) => console.error('Error fetching forms:', error));
  }, []);

  const handleChange = (event) => {
    setSelectedForm(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedForm) {
      onFormSubmit(selectedForm);
    }
  };

  return (
    <div className='col-md-6' id='guideContainer-rootPanel-panel-panel_185352355_copy-guidedropdownlist_82___guide-item'>
      <div className='guidedropdownlist guidefield guide-1534179022892'>
        <div className='guideFieldNode guideDropDownList formNumberSelection formNumberDrpdown defaultFieldLayout af-field-empty' id='guideContainer-rootPanel-panel-panel_185352355_copy-guidedropdownlist_82__'>
          <div className='guideFieldLabel top'> 
            <label htmlFor="form-select">Select a form</label>

          </div>
          <div className='guideFieldWidget dropDownList'>
            <select className='hiddenDropDownClass' id="form-select" value={selectedForm} onChange={handleChange}>
            <option value="" disabled style={{display: "none"}}></option>
              {forms.map((formName) => (
                <option key={formName} value={formName}>
                  {formName}
                </option>
                  ))}
                  </select>

          </div>
        </div>
      </div>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Dropdown;
