import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "employee",
    initialState: {
        employeeList: [],
        employeeNo: 0,
        lastNameKanji: "",
        firstNameKanji: "",
        lastNameHurigana: "",
        firstNameHurigana: "",
        lastNameEnglish: "",
        firstNameEnglish: "",
        mynumber: "",
        birthdate: "",
        gender: "",
        mailCompany: "",
        mailPrivate: "",
        joinDate: "",
        departmentId: 0,
        departmentCategoryList: [],
        departmentNameList: [],
        unitList: [],

        cellphoneNo: "",
        postNo: "",
        address: "",
        phoneNo: "",
        addressMotherCountry: "",
        postNoMotherCountry: "",
        cellphoneNoMotherCountry: "",
        phoneNoMotherCountry: "",
        cellphoneNoEmergency: "",
        nameEmergency: "",
        relationEmergency: "",
    },

    reducers: {
        // setEmployeeState: (state, action) => {
        //     console.log(action.payload);
        //     // state = { ...action.payload };
        //     state = action.payload;
        // },
        setEmployeeList: (state, action) => {
            state.employeeList = action.payload;
        },
        setEmployeeNo: (state, action) => {
            state.employeeNo = action.payload;
        },
        setLastNameKanji: (state, action) => {
            state.lastNameKanji = action.payload;
        },
        setFirstNameKanji: (state, action) => {
            state.firstNameKanji = action.payload;
        },
        setLastNameHurigana: (state, action) => {
            state.lastNameHurigana = action.payload;
        },
        setFirstNameHurigana: (state, action) => {
            state.firstNameHurigana = action.payload;
        },
        setLastNameEnglish: (state, action) => {
            state.lastNameEnglish = action.payload;
        },
        setFirstNameEnglish: (state, action) => {
            state.firstNameEnglish = action.payload;
        },
        setMynumber: (state, action) => {
            state.mynumber = action.payload;
        },
        setBirthdate: (state, action) => {
            state.birthdate = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setMailCompany: (state, action) => {
            state.mailCompany = action.payload;
        },
        setMailPrivate: (state, action) => {
            state.mailPrivate = action.payload;
        },
        setJoinDate: (state, action) => {
            state.joinDate = action.payload;
        },
        setDepartmentId: (state, action) => {
            state.departmentId = action.payload;
        },
        setDepartmentCategoryList: (state, action) => {
            state.departmentCategoryList = action.payload;
        },
        setDepartmentNameList: (state, action) => {
            state.departmentNameList = action.payload;
        },
        setUnitList: (state, action) => {
            state.unitList = action.payload;
        },
        setCellphoneNo: (state, action) => {
            state.cellphoneNo = action.payload;
        },
        setPostNo: (state, action) => {
            state.postNo = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },
        setPhoneNo: (state, action) => {
            state.phoneNo = action.payload;
        },
        setAddressMotherCountry: (state, action) => {
            state.addressMotherCountry = action.payload;
        },
        setPostNoMotherCountry: (state, action) => {
            state.postNoMotherCountry = action.payload;
        },
        setCellphoneNoMotherCountry: (state, action) => {
            state.cellphoneNoMotherCountry = action.payload;
        },
        setPhoneNoMotherCountry: (state, action) => {
            state.phoneNoMotherCountry = action.payload;
        },
        setCellphoneNoEmergency: (state, action) => {
            state.cellphoneNoEmergency = action.payload;
        },
        setNameEmergency: (state, action) => {
            state.nameEmergency = action.payload;
        },
        setRelationEmergency: (state, action) => {
            state.relationEmergency = action.payload;
        },
    }
});

export const {
    setEmployeeState,
    setEmployeeList,
    setEmployeeNo,
    setLastNameKanji,
    setFirstNameKanji,
    setLastNameHurigana,
    setFirstNameHurigana,
    setLastNameEnglish,
    setFirstNameEnglish,
    setMynumber,
    setBirthdate,
    setGender,
    setMailCompany,
    setMailPrivate,
    setJoinDate,
    setDepartmentId,
    setDepartmentCategoryList,
    setDepartmentNameList,
    setUnitList,
    setCellphoneNo,
    setPostNo,
    setAddress,
    setPhoneNo,
    setAddressMotherCountry,
    setPostNoMotherCountry,
    setCellphoneNoMotherCountry,
    setPhoneNoMotherCountry,
    setCellphoneNoEmergency,
    setNameEmergency,
    setRelationEmergency,
} = slice.actions;

export const employeeActions = { ...slice.actions };
export default slice.reducer;