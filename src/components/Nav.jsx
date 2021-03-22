import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import {links} from "../data"

const Nav = () => {
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <nav>
      <Section>
        <h1>
          find<span className="nav__span">A</span>cleaner
        </h1>
        <div onClick={() => setToggleNav(!toggleNav)} className="nav__mobile">
          {toggleNav ? <CgClose /> : <BiMenuAltRight />}
        </div>
        <ul className={toggleNav ? "ul--active" : ""}>
          {
            links.map((item)=>(
              <li key={item.id} className={toggleNav ? "li__fade" : "li"}>
              <Link className={`nav__link && ${item.uniq}`} to={item.ref}>
                {item.name}
              </Link>
            </li>
            ))
          }
        </ul>
      </Section>
    </nav>
  );
};

const Section = styled.section`
  margin: 0 auto;
  width: 90%;
  padding: 2em 0;

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
    text-transform:capitalize;
  }

  li:hover {
    opacity: 0.3;
    transition: var(--transition-one);
  }

  .nav__link--btn {
    color: var(--clr-base-light);
  }

  li {
    display: inline-block;
    padding: 0 1em;
    font-size: 1.3rem;
    font-family: var(--ff-body);
  }

  li:nth-child(4) {
    font-size: 1.5rem;
    background: var(--clr-base-one);
    border: 1px solid var(--clr-base-one);
    padding: 0.3em 1.5em;
    cursor: pointer;
  }

  li:nth-child(4):hover {
    opacity: 1;
    background: var(--clr-base-two);
    border: 1px solid var(--clr-base-two);
    transition: var(--transition-one);
  }

  .color{
    color:var(--clr-base-light);
  }

  /* smaller screen #cf1578 */
  @media screen and (max-width: 768px) {
    .nav__mobile {
      cursor: pointer;
      font-size: 3rem;
      color: var(--clr-base-two);
      z-index: 2;
    }

    ul {
      background: #b20238;
      position: absolute;
      right: -1em;
      top: 4em;
      width: 100vw;
      height: 100vh;

      clip-path: circle(0px at 90% -10%);
      --webkit-clip-path: circle(0px at 90% -10%);
      transition: all 1s ease-out;
    }

    .ul--active {
      clip-path: circle(900px at 90% -10%);
      --webkit-clip-path: circle(900px at 90% -10%);
    }

    li {
      display: grid;
      padding: 2em 0;
      justify-content: center;
    }

    ul li {
      opacity: 0;
    }

    ul li:nth-child(1) {
      transition: all 0.5s ease-in-out 0.2s;
    }
    ul li:nth-child(2) {
      transition: all 0.5s ease-in-out 0.5s;
    }

    ul li:nth-child(3) {
      transition: all 0.5s ease 0.8s;
    }

    ul li:nth-child(4) {
      transition: all 0.5s ease 1s;
      width:max-content;
      display:flex;
      margin:0 auto;
      
    }

    .li__fade {
      opacity: 1;
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
