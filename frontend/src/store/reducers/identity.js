import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "identity",
    initialState: {
        passportNo: "",
        passportExpirationDate: "",
        passportCountry: "",
        residenceNo: "",
        residenceDeliveryDate: "",
        residenceCategory: "",
        residencePeriod: "",
        residenceExpirationDate: "",
        accountNo: "",
        bankName: "",
        branchName: "",
        accountType: "",
        accountName: "",
    },

    reducers: {
        setPassportNo: (state, action) => {
            state.passportNo = action.payload;
        },
        setPassportExpirationDate: (state, action) => {
            state.passportExpirationDate = action.payload;
        },
        setPassportCountry: (state, action) => {
            state.passportCountry = action.payload;
        },
        setResidenceNo: (state, action) => {
            state.residenceNo = action.payload;
        },
        setResidenceDeliveryDate: (state, action) => {
            state.residenceDeliveryDate = action.payload;
        },
        setResidenceCategory: (state, action) => {
            state.residenceCategory = action.payload;
        },
        setResidencePeriod: (state, action) => {
            state.residencePeriod = action.payload;
        },
        setResidenceExpirationDate: (state, action) => {
            state.residenceExpirationDate = action.payload;
        },
        setAccountNo: (state, action) => {
            state.accountNo = action.payload;
        },
        setBankName: (state, action) => {
            state.bankName = action.payload;
        },
        setBranchName: (state, action) => {
            state.branchName = action.payload;
        },
        setAccountType: (state, action) => {
            state.accountType = action.payload;
        },
        setAccountName: (state, action) => {
            state.accountName = action.payload;
        }
    }
});

export const {
    setPassportNo,
    setPassportExpirationDate,
    setPassportCountry,
    setResidenceNo,
    setResidenceDeliveryDate,
    setResidenceCategory,
    setResidencePeriod,
    setResidenceExpirationDate,
    setAccountNo,
    setBankName,
    setBranchName,
    setAccountType,
    setAccountName,
} = slice.actions;

export const identityActions = { ...slice.actions };
export default slice.reducer;