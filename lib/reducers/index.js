import { combineReducers } from "@reduxjs/toolkit";

import usersReducers from "./users.reducers";

const combinedReducers = combineReducers({
    users: usersReducers,
});

export default combinedReducers;
