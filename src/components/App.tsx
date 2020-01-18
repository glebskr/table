import * as React from "react";
import Table from "./Table";
import { Provider } from "react-redux";
import store from "../store/store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  );
};
