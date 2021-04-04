import React from "react";
import styled from "styled-components";
import { socialMediaIcons } from "../utils/constants";

const SocialMedia = () => {
  return (
    <Container>
      <div className="icons-center">
        {socialMediaIcons.map((item) => {
          const {id, icon} = item;
          return (
            <div className="icon">
              {icon}
            </div>
          )
        })}
      </div>
    </Container>
  )
};

const Container = styled.div`
  .icons-center {
    display: flex;
    justify-content: center;
    background-color: #e0e0e0;

    .icon {
      padding: 40px 30px;
    }
  }

  @media screen and (max-width: 280px) {
    .icons-center {
      .icon {
        padding: 0px 5px;
      }
    }
  }
`;

export default SocialMedia;


