import React from "react";
import styled from "styled-components";
import {hows} from "../data"

const How = () => {
  return (
    <Section>
      <div className="container">
        <h1 className="container__heading">How it works</h1>

        <div className="grid">
          {
            hows.map((item)=>(
              <div key={item.id} className="card">
              <button className={`card__btn && ${item.color}`}>
                {item.logo}
              </button>
              <h2 className="card__h2">{item.title}</h2>
              <p className="card__p">
                {item.para}
              </p>
            </div>
            ))
          }
         
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background: var(--clr-base-one);
  position: relative;
  top: 0;
  font-family:var(--ff-body);

  .container {
    margin: 0 auto;
    width: 90%;

    padding: 2em 0;
    color: var(--clr-base-light);
  }

  .container__heading {
    font-size: 3rem;
    font-family: var(--ff-heading);
  }

  .card {
    background: var(--clr-base-light);
    color: var(--clr-base-dark);
    width: 100%;
    padding: 2em;
    cursor: pointer;
  }

  .card:hover {
    box-shadow: 10px 10px 9px -2px rgba(13, 17, 55, 0.75) inset;
    -webkit-box-shadow: 10px 10px 9px -2px rgba(13, 17, 55, 0.75) inset;
    -moz-box-shadow: 10px 10px 9px -2px rgba(13, 17, 55, 0.75) inset;
    transition: var(--transition-one);
  }

  .card__btn {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    color: var(--clr-base-light);
    font-size: 2.5rem;
  }

  .card__h2 {
    font-size: 2rem;
    text-transform: capitalize;
  }

  .card__p {
    line-height: 1.5;
  }
  
  .grid{
    display:grid
  }

  .yellow {
    background: #e2d810;
    border: 1px solid #e2d810;
  }
  .magenta {
    background: #d9138a;
    border: 1px solid #d9138a;
  }
  .cyan {
    background: #12a4d9;
    border: 1px solid #12a4d9;
  }

/* ================
larger screen
 ================== */

 @media screen and (min-width: 768px) {
  margin-top: 16em;

   .grid{
     grid-template-columns:repeat(3,1fr);
     column-gap:1em;
   }
 }

/* ================
smaller screen
 ================== */

 @media screen and (max-width: 768px) {
   .grid{
     row-gap:1em;
   }
 }
`;

export default How;
