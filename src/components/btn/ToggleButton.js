import {useState} from "react";


export function ToggleButton(props) {
  const handleClick = () => {
    props.setToggleRef(!props.toggleRef);
  }
  return (
    <div id="normalReferenceToggle" className="can-toggle">
      <input id="toggleReferenceUpload" type="checkbox" checked={props.toggleRef} />
      <label htmlFor="toggleReferenceUpload" onClick={handleClick}>
        <div className="can-toggle__switch" data-checked="REFERENCE" data-unchecked="NORMAL"></div>
      </label>
    </div>
  )
}
