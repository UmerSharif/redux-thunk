import React from "react";

import Counter from "./Counter";
import FormData from "./FormData";
import store from "./store";
import { Provider } from "react-redux";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <FormData />
      </div>
    </Provider>
  );
}

export default App;
