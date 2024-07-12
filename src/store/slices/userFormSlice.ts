import { UserAuthData, UserData } from "@/types/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Role{
    role: '';
}

interface InitialState{
    role:string,
    skills:string[],
    title:string,
    userAuthDetails:UserAuthData
}

const initialState:InitialState={
    role:'',
    skills:[],
    title:'',
     userAuthDetails:{
        name:null,
        email:null,
        password:null
     
       
     },

}

const userFormSlice = createSlice({
    name: 'userForm',
    initialState,
    reducers: {
        setRole: (state, action: PayloadAction<{ role:string}>) => {

            state.role = action.payload.role;
        },
        setUserSkills:(state,action: PayloadAction<{ skills:string[]}>)=>
        {
            state.skills = action.payload.skills;

        },
        setUserTitle:(state,action:PayloadAction<{ title:string }>) => {
state.title = action.payload.title;
         }
        ,
        setUserAuthDetails:(state, action: PayloadAction<{userAuthDetails:UserAuthData}>)=>{
            state.userAuthDetails=action.payload.userAuthDetails;
           

        }

    }
});

export const { setRole,setUserSkills,setUserAuthDetails,setUserTitle } =userFormSlice.actions;

export default userFormSlice.reducer;
