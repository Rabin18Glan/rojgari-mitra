import { UserAuthData, UserFormData } from "@/types/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";





const initialState:UserFormData={
    role:'',
    skills:[],
    title:'',
        username:null,
        email:null,
        password:null,
        password_confirmation:null
     
       
   

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
            state.username=action.payload.userAuthDetails.username;
            state.password=action.payload.userAuthDetails.password;
            state.email = action.payload.userAuthDetails.email
            state.password_confirmation = action.payload.userAuthDetails.password_confirmation
           

        }

    }
});

export const { setRole,setUserSkills,setUserAuthDetails,setUserTitle } =userFormSlice.actions;

export default userFormSlice.reducer;
