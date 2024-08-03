import React from "react";

function InputBox({ type, id, placeholder, value, onChange }) {
    return (
        <input
            type={type}
            id={id}
            className="ipt"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default InputBox;
