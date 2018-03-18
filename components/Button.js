import React, {Fragment} from 'react';
import cssVariables from '../styles/cssVariables'

const Button = ({children, ...other}) => (
  <Fragment>
    <button {...other}>
      {children}
    </button>

    <style jsx>{`
      button {
        text-transform: uppercase;
        background: ${cssVariables.colours.red};
        color: #fff;
        padding: 5px 8px;
        border: none;
        cursor: pointer;
      }

      button[disabled] {
        background: grey;
        cursor: not-allowed;
      }
    `}</style>
  </Fragment>
);

export default Button;
