import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { EventsContainer } from "./components/EventsContainer";
import { Timeline } from "./components/Timeline";
import { EventCard } from "./components/EventCard";
import { EventPosition } from "./components/EventPosition";
import { getOverlappingEvents } from "./calendar.utils";

const StyledDiv = styled.div`
  display: flex;
  margin: 50px;
`;

const getEventKey = ({ start, end }) => `${start}:${end}`;

export const Calendar = ({ initialEvents = [] }) => {
  const [events, setEvents] = useState(initialEvents);

  // For the purposes of testing - setting it on the window
  window.layoutDay = setEvents;

  const eventGroups = useMemo(() => getOverlappingEvents(events), [events]);

  return (
    <StyledDiv>
      <Timeline />
      <EventsContainer>
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
      </EventsContainer>
    </StyledDiv>
  );
};
