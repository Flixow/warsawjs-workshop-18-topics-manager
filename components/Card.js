import React from 'react';

const Card = ({title, Footer}) => (
  <div className='Card'>
    <h2>{title}</h2>

    <div className='Content'>
      <ul>
        <li>
          <img src="https://placehold.it/50x50" alt=""/>
          Daniel Siwek
        </li>
        <li>
          <img src="https://placehold.it/50x50" alt=""/>
          Daniel Siwek
        </li>
        <li>
          <img src="https://placehold.it/50x50" alt=""/>
          Daniel Siwek
        </li>
      </ul>
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

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      li {
        display: flex;
        align-items: center;
        border: 1px solid #9b9b9b;
        border-radius: 4px;
        padding: 10px;
        margin-top: 10px
      }

      li:fist-child {
        margin-top: 0;
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
