import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./services/reducers/rootReducer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

export const store: any = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
