import React from "react";
import styled from "styled-components";
import { footerMenu } from "../utils/constants";

const FooterMenu = () => {
  return (
    <Wrapper>
      <div className="menu-center">
        {footerMenu.map((item) => {
          const { id, title, links } = item;

          return (
            <div>
              <h2>{title.toLocaleUpperCase()}</h2>

              {links.map((link) => {
                return (
                  <a id={id} href="#">{link}</a>              
                )
              })}
            </div>
          )
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin-top: 50px;

  .menu-center {
    display: flex;
    justify-content: space-around;
    background-color: #f6f6f6;
    padding: 35px 0px;
  }

  h2 {
    color: #666;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: #666;
    font-size: 12px;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  div a {
    display: flex;
    flex-direction: column;
    padding: 3px;
  }

  a:hover {
    border-bottom: 1px solid gray;
    width: max-content;
  }

  @media screen and (max-width: 765px) {
    .menu-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 300px) and (max-width: 639px) {
    .menu-center {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 10px;
    }
  }
`;

export default FooterMenu;
