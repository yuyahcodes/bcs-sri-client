import { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface User {
        id: string
        email: string
        cognitoGroups: string[]
        accessToken: string
        access_token: string
        refreshToken: string
        idToken: string
        exp: number
        role: string
    }

    interface Session {
        user: User & DefaultSession["user"]
        accessToken: string
        access_token: string
        expires: string
        error: string
    }
}

export interface ApiResponse {
    access_token: string;
    token_type: string;
}