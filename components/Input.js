import React from 'react';

const Input = ({className, ...other}) => (
  <label
    className={`
      ${className ? className : ''}
    `}
  >
    <input type="text" {...other} />

    <style jsx>{`
      input {
        outline: 0;
        border: none;
        padding: 8px 5px;
        width: 100%;
      }

      input:focus {
        box-shadow:inset 0px 0px 0px 1px #91b8ff;
      }
    `}</style>
  </label>
);

export default Input;
