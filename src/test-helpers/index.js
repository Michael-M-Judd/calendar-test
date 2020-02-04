import { render as _render } from "@testing-library/react";
import { Provider } from "../components/Provider/Provider";

export const render = (component, options) =>
  _render(component, { ...options, wrapper: Provider });
