import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { EventContainer } from "./components/EventContainer";
import { Timeline } from "./components/Timeline";
import { EventCard } from "./components/EventCard";
import { getEventPosition, getOverlappingEvents } from "./calendar.utils";

const StyledDiv = styled.div`
  display: flex;
  margin: 50px;
`;

const testEvents = [
  { start: 30, end: 150 },
  { start: 540, end: 600 },
  { start: 560, end: 620 },
  { start: 610, end: 670 }
];

const EventPosition = styled.div`
  position: absolute;
  top: ${({ event, previousColumnEvent }) =>
    getEventPosition(event, previousColumnEvent)}px;
  left: ${({ order }) => (order % 2 === 0 ? 0 : "50%")};
  width: ${({ overlapping }) => (overlapping ? "50%" : "100%")};
`;

const getEventKey = ({ start, end }) => `${start}:${end}`;

export const Calendar = () => {
  const [events, setEvents] = useState(testEvents);

  // For the purposes of testing - setting it on the window
  window.layoutDay = setEvents;

  const eventGroups = useMemo(() => getOverlappingEvents(events), [events]);

  return (
    <StyledDiv>
      <Timeline />
      <EventContainer>
        {eventGroups.map(eventGroup =>
          eventGroup.map((event, index) => (
            <EventPosition
              event={event}
              previousColumnEvent={eventGroup[index - 2]}
              key={getEventKey(event)}
              order={index}
              overlapping={eventGroup.length > 1}
            >
              <EventCard
                event={event}
                title="Sample Item"
                location="Sample Location"
              />
            </EventPosition>
          ))
        )}
      </EventContainer>
    </StyledDiv>
  );
};
