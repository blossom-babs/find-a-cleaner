import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <nav>
      <Section>
        <h1>
          find<span className="nav__span">A</span>cleaner
        </h1>
        <div className="nav__mobile">open btn</div>
        <ul>
          <li>
            {" "}
            <Link className="nav__link" to="/">
              {" "}
              Home{" "}
            </Link>{" "}
          </li>
          <li>
            <Link className="nav__link" to="/about">
              {" "}
              About{" "}
            </Link>{" "}
          </li>
          <li>
            <Link className="nav__link" to="/fac">
              Find A Cleaner
            </Link>
          </li>
          <li>
            <button>
              <Link className="nav__link nav__link--btn" to="/signin">
                Login
              </Link>
            </button>
          </li>
        </ul>
      </Section>
    </nav>
  );
};

const Section = styled.section`
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Comic Neue", cursive;
    font-size: 2rem;
  }

  .nav__span {
    color: var(--clr-base-one);
  }

  .nav__link {
    text-decoration: none;
    color: var(--clr-base-dark);
  }

  .nav__link:not(.nav__link--btn):hover {
    opacity: 0.3;
    transition: var(--transition-one);
  }

  .nav__link--btn {
    color: var(--clr-base-light);
  }

  li {
    display: inline-block;
    padding: 0 1rem;
    font-size: 1.3rem;
    font-family: var(--ff-body);
  }

  button {
    font-size: 1.5rem;
    background: var(--clr-base-one);
    border: 1px solid var(--clr-base-one);
    padding: 0.3rem 1.5rem;
    cursor: pointer;
  }

  button:hover {
    background: var(--clr-base-two);
    border: 1px solid var(--clr-base-two);
    transition: var(--transition-one);
  }

  /* smaller screen #cf1578 */
  @media screen and (max-width: 768px) {
    ul {
      background: #b20238;
      position: absolute;
      right: -2rem;
      top: 6rem;
      width: 50vw;
      height: 100vh;
    }

    li {
      display: grid;
      padding: 2rem 0;
      justify-content: center;
    }

    .nav__link:not(.nav__link--btn) {
      color: var(--clr-base-light);
      font-size: 1.5rem;
     
    }
  }

  /* larger screens */
  @media screen and (min-width: 768px) {
    .nav__mobile {
      display: none;
    }
  }
`;

export default Nav;
