import axios from "axios";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import * as api from "../api/api";
import { rootReducer } from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      })
    )
  )
);
