import cssVariables from '../styles/cssVariables'

const Card = ({title, children, Footer}) => (
  <div className='Card'>
    <h2>{title}</h2>

    <div className='Content'>
      {children}
    </div>

    <footer>
      <Footer />
    </footer>

    <style jsx>{`
      .Card {
        box-shadow: 0px 4px 6px 0px rgba(50,74,155,0.11);
        padding: 10px;
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }

      h2 {
        color: ${cssVariables.colours.red}
      }

      h2 {
        border-bottom: 1px solid #9b9b9b;
        margin-bottom: 0;
      }

      footer {
        border-top: 1px solid #9b9b9b;
      }

      h2,
      footer,
      .Content {
        padding: 15px;
      }

      footer {
        display: flex;
        justify-content: center;
        padding: 10px;
      }
    `}</style>
  </div>
);

export default Card;
