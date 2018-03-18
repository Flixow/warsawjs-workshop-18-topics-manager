import cssVariables from '../styles/cssVariables'

const Wrapper = ({children, maxWidth = 1280, className}) => (
  <div className={`
    Wrapper
    ${className ? className : ''}
  `}>
    {children}

    <style jsx>{`
      .Wrapper {
        max-width: ${maxWidth}px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
)

export default Wrapper
