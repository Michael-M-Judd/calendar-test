import {
  getEventHeight,
  getEventPosition,
  getOverlappingEvents
} from "./calendar.utils";

const event = { start: 30, end: 190 };

describe("Calendar/calendar.utils", () => {
  describe("getEventHeight", () => {
    describe("with valid event", () => {
      it("returns the correct height", () => {
        expect(getEventHeight(event)).toEqual(160);
      });
    });
  });

  describe("getEventPosition", () => {
    describe("with a valid event", () => {
      describe("with no previous event", () => {
        const previousColumnEvent = undefined;

        it("returns the correct position", () => {
          expect(getEventPosition(event, previousColumnEvent)).toEqual(30);
        });
      });

      describe("with a previous column event that overlaps", () => {
        const previousColumnEvent = { start: 10, end: 20 };

        it("returns the correct position", () => {
          expect(getEventPosition(event, previousColumnEvent)).toEqual(40);
        });
      });

      describe("with a previous column event that does not overlap", () => {
        const previousColumnEvent = {
          start: event.end + 10,
          end: event.end + 100
        };

        it("returns the correct position", () => {
          expect(getEventPosition(event, previousColumnEvent)).toEqual(30);
        });
      });
    });
  });

  describe("getOverlappingEvents", () => {
    describe("with identical timed events", () => {
      const groupedEvent = { start: 200, end: 300 };
      const groupedEvents = [groupedEvent, groupedEvent];
      const events = [event, ...groupedEvents];

      it("groups the events correctly", () => {
        const result = getOverlappingEvents(events);

        expect(result[0]).toEqual([event]);
        expect(result[1]).toEqual(groupedEvents);
        expect(result.length).toEqual(2);
      });
    });

    describe("with no overlapping events", () => {
      const event2 = { start: 200, end: 300 };
      const event3 = { start: 400, end: 500 };

      it("has separate event groups for each", () => {
        const events = [event, event2, event3];

        const result = getOverlappingEvents(events);
        expect(result.length).toEqual(3);
      });

      describe("when events are unordered", () => {
        const events = [event3, event2, event];

        it("returns the events in order", () => {
          const result = getOverlappingEvents(events);

          expect(result[0]).toEqual([event]);
          expect(result[1]).toEqual([event2]);
          expect(result[2]).toEqual([event3]);
        });
      });
    });
  });
});
