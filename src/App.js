import React from "react";
import { Provider } from "./components/Provider";
import { Calendar } from "./components/Calendar";

function App() {
  return (
    <Provider>
      <Calendar />
    </Provider>
  );
}

export default App;
