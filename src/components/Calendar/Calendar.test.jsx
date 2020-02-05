import React from "react";
import { render } from "../../test-helpers";
import { Calendar } from "./Calendar";
import { testKey } from "./components/EventCard";

const events = [
  { start: 30, end: 150 },
  { start: 540, end: 600 },
  { start: 560, end: 620 },
  { start: 610, end: 670 }
];

describe("Calendar", () => {
  describe("with an array of events", () => {
    it("renders all the events", () => {
      const { getByTestId } = render(<Calendar initialEvents={events} />);

      events.forEach(event => {
        expect(getByTestId(testKey(event))).toBeInTheDocument();
      });
    });

    // I would usually use screenshot tests here rather than snapshots
    it("matches previous snapshot", () => {
      const { container } = render(<Calendar initialEvents={events} />);

      expect(container).toMatchSnapshot();
    });
  });
});
