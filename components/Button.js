import React, {Fragment} from 'react';
import cssVariables from '../styles/cssVariables'

const Button = ({children, ...other}) => (
  <Fragment>
    <button {...other}>
      {children}
    </button>

    <style jsx>{`
      button {
        background: ${cssVariables.colours.blue};
        color: #fff;
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
