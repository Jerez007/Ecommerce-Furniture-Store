import React from "react";
import styled from "styled-components";
import { socialMediaIcons } from "../utils/constants";

const SocialMedia = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
};

const Wrapper = styled.div`
  .icons-center {
    display: flex;
    justify-content: center;
    background-color: #d3d3d3;

    .icon {
      padding: 10px 30px;
    }
  }
`;

export default SocialMedia;


