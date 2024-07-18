import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
    user_id: string | null;
    name: string | null;
    email: string | null;
    role:string | null;

}

interface AuthState {
    loggedIn: boolean;
    userData: UserData;
}

const getInitialAuthState = (): AuthState => {
    if (typeof window !== "undefined") {
        const savedState = localStorage.getItem('auth');
        const userData: UserData| null =savedState ? JSON.parse(savedState) :  null;
        return {
          
           loggedIn: userData ? true : false,
            userData: {
                user_id: userData?.user_id || null,
                name: userData?.name || null,
                email:userData?.email || null,
                role:userData?.role||null
            }
        };
    } else {
        return {
    
            loggedIn: false,
            userData: {
                role:null,
                user_id: null,
                name: null,
                email: null,
            }
        };
    }
};

const initialState: AuthState = getInitialAuthState();

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ userData: UserData }>) => {

            state.loggedIn = true;
            state.userData = action.payload.userData;
            if (typeof window !== "undefined") {
                const authData = {  userData: state.userData };
                localStorage.setItem('auth', JSON.stringify(authData));
            }
        },
        logout: (state) => {
          
            state.loggedIn = false;
            state.userData = {
                role:null,
                user_id: null,
                name: null,
                email: null,
            };
            if (typeof window !== "undefined") {//for browsers
                localStorage.removeItem('auth');
            }
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
