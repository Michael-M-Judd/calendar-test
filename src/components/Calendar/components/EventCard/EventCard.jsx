import React from "react";
import styled, { css } from "styled-components";
import { getEventHeight } from "../../calendar.utils";

const cardBorderWidth = 5;

const cornerCardCss = css`
  border-top: ${cardBorderWidth * 0.75}px solid transparent;
  border-bottom: ${cardBorderWidth * 0.75}px solid transparent;
  border-left: ${cardBorderWidth * 1.1}px solid ${({ theme }) => theme.primary};
  border-radius: ${cardBorderWidth}px;
  position: absolute;
  height: 0px;
  width: 0px;
  content: "";
`;

const StyledCard = styled.div`
  background: ${({ theme }) => theme.background.white};
  border-left: ${cardBorderWidth}px ${({ theme }) => theme.primary} solid;
  border-radius: 0 2px 2px 0;
  display: flex;
  flex-direction: column;
  height: ${props => props.height * 0.8}px;
  padding: 10px;
  position: relative;
  margin: 0 5px;

  &:after {
    ${cornerCardCss}
    bottom: -${cardBorderWidth * 0.75}px;
    left: -${cardBorderWidth}px;
  }

  &:before {
    ${cornerCardCss}
    top: -${cardBorderWidth * 0.75}px;
    left: -${cardBorderWidth}px;
  }
`;

const Title = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

const Location = styled.span`
  color: ${({ theme }) => theme.font.light};
  font-size: 12px;
`;

export const testKey = ({ start, end }) => `event-card:${start}:${end}`;

export const EventCard = ({ title, location, event }) => {
  return (
    <StyledCard height={getEventHeight(event)} data-testid={testKey(event)}>
      <Title>{title}</Title>
      <Location>{location}</Location>
    </StyledCard>
  );
};
