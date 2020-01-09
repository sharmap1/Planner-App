import React from "react";
//TODO replace tags with materialize 
function Form({ handleInputChange, handleFormSubmit }) {
  return (
    <div className="nav-wrapper">
      <div>
        <div className="input-field">
        {/* email form */}
          <input 
            onChange={handleInputChange}
            id="email" 
            type="email"  
            placeholder="email"
            required
          />
          <label className="label-icon" for="search">
            <i className="material-icons">assignment_ind</i> 
          </label>
          {/* password form */}
          <input 
            onChange={handleInputChange}
            id="password" 
            type="password"  
            placeholder="password"
            required
          />
          <label className="label-icon" for="search">
            <i className="material-icons">fingerprint</i> 
          </label>
          <button 
            className="btn waves-effect waves-light" 
            onClick={handleFormSubmit}
            >Submit
            <i className="material-icons right" >send</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;