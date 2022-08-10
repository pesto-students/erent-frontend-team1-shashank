import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import combineReudcers from "@lib/reducers";

const makeStore = () =>
    configureStore({
        reducer: combineReudcers,
    });

const wrapper = createWrapper(makeStore);

export default wrapper;
