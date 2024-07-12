export interface UserData {
    user_id: string | null;
    name: string | null;
    email: string | null;
    role:string | null;

}



export interface UserAuthData{
    username: string | null,
    email: string | null,
    password: string | null,
    password_confirmation:string|null
}


export interface UserFormData{  role:string,
    skills:string[],
    title:string,
    username: string | null,
    email: string | null,
    password: string | null,
    password_confirmation:string|null

}