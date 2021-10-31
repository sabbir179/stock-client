import React from 'react';
import "./FromInput.css"

const FromInput = (props) => {
    const { label, onChange, id, ...inputProps } = props;
    return (
        <div className="fromInput">
            <lable> {label} </lable>
            <input {...inputProps} onChange={onChange} />
        </div>
    );
};

export default FromInput;