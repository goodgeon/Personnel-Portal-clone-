import { configureStore } from "@reduxjs/toolkit";
import employeeReducers from "./reducers/employee";
import careerReducers from "./reducers/career"
import identityReducers from "./reducers/identity"

export default configureStore({
    reducer: {
        employee: employeeReducers,
        career: careerReducers,
        identity: identityReducers
    },
});
