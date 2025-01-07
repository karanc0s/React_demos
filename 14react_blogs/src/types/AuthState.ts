import {TUser} from "./TUser.ts";

export type AuthState = {
    status: boolean,
    userData: TUser | null
}