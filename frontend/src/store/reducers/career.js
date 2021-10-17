import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "career",
    initialState: {
        graduationDate: "",
        school: "",
        major: "",
        educationStartDate: "",
        institutionName: "",
        courseName: "",
        careerJoinDate: "",
        careerExitDate: "",
        companyName: "",
        position: "",
        task: "",
        isAbroad: "",


    },

    reducers: {
        setGraduationDate: (state, action) => {
            state.graduationDate = action.payload;
        },
        setSchool: (state, action) => {
            state.school = action.payload;
        },
        setMajor: (state, action) => {
            state.major = action.payload;
        },
        setEducationStartDate: (state, action) => {
            state.educationStartDate = action.payload;
        },
        setInstitutionName: (state, action) => {
            state.institutionName = action.payload;
        },
        setCourseName: (state, action) => {
            state.courseName = action.payload;
        },
        setCareerJoinDate: (state, action) => {
            state.careerJoinDate = action.payload;
        },
        setCareerExitDate: (state, action) => {
            state.careerExitDate = action.payload;
        },
        setCompanyName: (state, action) => {
            state.companyName = action.payload;
        },
        setPosition: (state, action) => {
            state.position = action.payload;
        },
        setTask: (state, action) => {
            state.task = action.payload;
        },
        setIsAbroad: (state, action) => {
            state.isAbroad = action.payload;
        }
    }
});

export const {
    setGraduationDate,
    setSchool,
    setMajor,
    setEducationStartDate,
    setInstitutionName,
    setCourseName,
    setCareerJoinDate,
    setCompanyName,
    setCareerExitDate,
    setPosition,
    setTask,
    setIsAbroad,
} = slice.actions;

export const careerActions = { ...slice.actions };
export default slice.reducer;