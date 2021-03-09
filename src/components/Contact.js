import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="content">
          <h3>win a $1000 solis-j gift card</h3>

          <p>
            Sign up to the SOLIS-J email newsletter and you will be entered into
            prize draw to win a $1000 gift card. You will receive weekly offers,
            seasonal contests and inspiration directly to your email inbox.
          </p>

          <div className="consent">
            <input type="checkbox" name="consent" id="consent" />
            <span>
              By providing your email address and clicking on the Sign up
              button, you are providing your consent to receive SOLIS-J Bed Bath
              Home newsletters by email. You can unsubscribe at any time.
              SOLIS-J Linen n' Furniture Unit 101 - 25 King Edward Street,
              Coquitlam, BC, Canada V3K 4S8
            </span>
          </div>

          <form action="" className="contact-form">
            <input
              type="email"
              name="_replyto"
              className="form-input"
              placeholder="enter email"
            />
            <button className="submit-btn">sign up</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section-center {
    background-image: url("https://www.jysk.ca/static/version1615191202/frontend/JYSK/default/en_CA/images/bg/blue-pattern.jpg");
    color: white;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 560px;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 0;

    p,
    div,
    form {
      padding: 16px;
    }

    h3,
    p {
      text-align: center;
    }
  }

  .consent {
    display: flex;
    margin-left: 5px;
    
    span {
      margin-left: 7px;
    }
  }

  h3 {
    text-transform: uppercase;
  }

`;

export default Contact;
