import React from "react";

const ProgressBar = () => {
  return (
    <div className="progress">
      <div className="progress-bar w-25" role='progressbar' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
    </div>
  )
}

export default ProgressBar;