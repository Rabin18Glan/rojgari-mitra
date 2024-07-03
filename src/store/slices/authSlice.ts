import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
    user_id: string | null;
    name: string | null;
    email: string | null;
}

interface AuthState {
    token: string | null;
    status: boolean;
    userData: UserData;
}

const getInitialAuthState = (): AuthState => {
    if (typeof window !== "undefined") {
        const savedState = localStorage.getItem('auth');
        const parsedState: AuthState | null = savedState ? JSON.parse(savedState) : null;
        return {
            token: parsedState?.token || null,
            status: parsedState?.token ? true : false,
            userData: {
                user_id: parsedState?.userData?.user_id || null,
                name: parsedState?.userData?.name || null,
                email: parsedState?.userData?.email || null,
            }
        };
    } else {
        return {
            token: null,
            status: false,
            userData: {
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
        login: (state, action: PayloadAction<{ token: string, userData: UserData }>) => {
            state.token = action.payload.token;
            state.status = true;
            state.userData = action.payload.userData;
            if (typeof window !== "undefined") {
                const authData = { token: state.token, userData: state.userData };
                localStorage.setItem('auth', JSON.stringify(authData));
            }
        },
        logout: (state) => {
            state.token = null;
            state.status = false;
            state.userData = {
                user_id: null,
                name: null,
                email: null,
            };
            if (typeof window !== "undefined") {
                localStorage.removeItem('auth');
            }
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
