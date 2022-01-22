import React from 'react';

import toggleCss from './Toggel.css'

const Toggle = ({ label }) => {
  return (
    <div className="toggle-container">
        {label}
        <div className="toggle-switch">
            <input type="checkbox" className="checkbox" name={label} id={label}/>
            <label className={label} htmlFor={label}>
                <span className="inner" />
                <span className="switch" />
            </label>
        </div>
    </div>
  );
};

export default Toggle;
