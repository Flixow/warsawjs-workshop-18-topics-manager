import React from 'react';

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
        display: inline-block;
      }

      .Content,
      footer {
        border-top: 1px solid #9b9b9b;
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
