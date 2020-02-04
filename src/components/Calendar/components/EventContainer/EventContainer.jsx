import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: ${({ theme }) => theme.background.default};
  padding: 0 10px;
  width: 620px;
  height: 720px;
`;

const RelativeContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const EventContainer = ({ children }) => (
  <StyledDiv>
    <RelativeContainer>{children}</RelativeContainer>
  </StyledDiv>
);
