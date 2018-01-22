import React from 'react';

const getStyle = (num, length) => {
    return {
        width: ((num - 1)  / (length - 1) * 100) + '%'
    }

}



const ProgressBar = props => (
    <div>   
        <h6>ProgressBar</h6>
        <div className="progress">
            <span style={getStyle(props.step, props.length)}></span>
        </div>
    </div>
);

  export default ProgressBar;