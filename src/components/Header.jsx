import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Clean } from "../assets";

const Header = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <h1 className="header__h1">Need a hand with house chores?</h1>
          <p className="header__p">
            We are here to match you with the perfect service for all your
            household chores.{" "}
          </p>
          <Link className="header__link" to="/signup">
            Find a cleaner
          </Link>
        </div>
        <img className="header__img" src={Clean} alt="cleaning-service" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  .container {
    font-family: var(--ff-body);
    display: flex;
    flex-direction: column;
  }

  .header {
    width: 90%;
    margin: 0 auto;
  }

  .header__h1 {
    font-family: var(--ff-heading);
    color: var(--clr-base-two);
    margin-top: 0;
    margin-bottom: 0;
  }
  .header__p {
    padding: 1em 0;
    width: 40ch;
  }

  .header__link {
    background: var(--clr-base-one);
    width: max-content;
    padding: 0.5em;
    text-decoration: none;
    color: var(--clr-base-light);
  }
  .header__link:hover {
    transition: var(--transition-one);
    background: var(--clr-base-two);
  }

  /* larger screens */
  @media screen and (min-width: 768px) {
    .header__h1 {
      font-size: 3rem;
      margin-top: 1em;
      width: 20ch;
    }

    .header__p {
      font-size: 2rem;
      width: 50ch;
    }

    .header__link {
      font-size: 2rem;
    }
    .header__img {
      /* margin-top:-30em; */
      /* margin-top: -25%; */
     width:50%;
     position:absolute;
     right:0;
    }
  }
`;

export default Header;
