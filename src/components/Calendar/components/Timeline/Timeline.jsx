import React from "react";
import styled from "styled-components";
import { hourBlockHeight, hours, periods } from "../../constants";

const HourLabel = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.font.default};
  margin-right: 5px;
`;

const TimePeriod = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.font.light};
`;

const HalfHourContainer = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.font.light};
  position: absolute;
  right: 0;
  top: 50%;
`;

const HourContainer = styled.div`
  position: relative;
  height: ${hourBlockHeight}px;
  display: flex;
  justify-content: flex-end;
`;

const showHalfHour = (time, period) =>
  !(time === "9:00" && period === periods.pm);

const HourSection = ({ time, period }) => (
  <HourContainer>
    <div>
      <HourLabel>{time}</HourLabel>
      <TimePeriod>{period}</TimePeriod>
    </div>

    {showHalfHour(time, period) && (
      <HalfHourContainer>{time.replace("00", "30")}</HalfHourContainer>
    )}
  </HourContainer>
);

const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding-right: 10px;
`;

export const Timeline = () => (
  <StyledDiv>
    {hours.map(({ time, period }) => (
      <HourSection time={time} period={period} key={`${time}:${period}`} />
    ))}
  </StyledDiv>
);
