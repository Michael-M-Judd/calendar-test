import styled from "styled-components";
import { getEventYPosition } from "../../calendar.utils";

const getEventCardWidth = ({ overlapping }) => (overlapping ? "50%" : "100%");
const getEventCardXPosition = ({ order }) => (order % 2 === 0 ? 0 : "50%");

export const EventPosition = styled.div`
  position: absolute;
  top: ${getEventYPosition}px;
  left: ${getEventCardXPosition};
  width: ${getEventCardWidth};
`;
