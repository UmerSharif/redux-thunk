import React from "react";
import { Provider } from "react-redux";

import Counter from "./Counter";
import FormData from "./FormData";
import store from "./store";

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
