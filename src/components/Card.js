import React from 'react';
import Data from './Data';
import '../index.scss';

export default function Card() {
  return (
    <>
      {Data.map(({
          img,
          topic,
          name
        }) =>
          <div className="card">
            <img src={img.url} alt={img.alt} />
            <p>{topic}</p>
            <h3>{name}</h3>
            <button>
              Save
            </button>
          </div>
        )
      }
    </>
  )
}
