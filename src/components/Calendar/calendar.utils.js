import { hourBlockHeight } from "./constants";

const hourLength = 60;

/**
 * Gets the height in px of an event
 */
export const getEventHeight = ({ start, end }) => {
  return ((end - start) / hourLength) * hourBlockHeight;
};

/**
 * Finds the absolute position for a calendar event.
 */
export const getEventPosition = (event, groupedEvents) => {
  const baseEventPosition = (event.start / hourLength) * hourBlockHeight;

  const otherEvents = groupedEvents.filter(
    groupedEvent => groupedEvent !== event
  );

  const overlappingEvent = () => {}; // TODO

  if (previousColumnEvent && previousColumnEvent.end <= event.start) {
    console.log("hello");
    const overlapDistance = event.start - previousColumnEvent.end;
    console.log({ overlapDistance });

    return baseEventPosition + overlapDistance;
  }

  return baseEventPosition;
};

const findLatestEvent = events =>
  events.reduce(
    (currentLatest, event) => {
      if (currentLatest.end >= event.end) {
        return currentLatest;
      }

      return event;
    },
    { end: 0 }
  );

/**
 * Finds all overlapping events and groups them together in an array
 * @returns {Event[][]}
 */
export const getOverlappingEvents = events => {
  const sortedEvents = events.sort((a, b) => a.start - b.start);
  const eventGroups = [];

  sortedEvents.forEach(event => {
    if (eventGroups.length === 0) {
      eventGroups.push([event]);
    } else {
      // Since our events are sorted we always know the latest event group is the last one
      const latestEventGroup = eventGroups[eventGroups.length - 1];
      const earliestEventInGroup = latestEventGroup[0];
      const latestEventInGroup = findLatestEvent(latestEventGroup);

      if (
        event.start >= earliestEventInGroup.start &&
        event.start <= latestEventInGroup.end
      ) {
        latestEventGroup.push(event);
      } else {
        // no overlap
        eventGroups.push([event]);
      }
    }
  });

  console.log(eventGroups);

  return eventGroups;
};
