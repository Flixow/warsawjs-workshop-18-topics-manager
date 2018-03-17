import React from 'react';

const Input = ({...other}) => (
  <label>
    <input type="text" {...other} />

    <style jsx>{`
      input {
        border-radius: 4px;
        outline: 0;
        border: 1px solid #8f8f8f;
        padding: 3px 5px;
      }

      input:focus {
        border: 1px solid #91b8ff;
      }
    `}</style>
  </label>
);

export default Input;
