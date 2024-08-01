import Credentials from "next-auth/providers/credentials";
import NextAuth, {User} from "next-auth";
import {authConfig} from "@/auth.config";
import { jwtDecode } from "jwt-decode";

interface ApiResponse {
    access_token: string;
    token_type: string;
}

interface DecodedToken {
    sub: string;
    exp: number;
    [key: string]: any; // Optional: Add other fields if present in the decoded token
}


export const {handlers, auth, signIn, signOut} = NextAuth({
    ...authConfig, providers: [
        Credentials({
        name: "Credentials", credentials: {
            username: {label: "Username", type: "text", placeholder: ""},
            password: {label: "Password", type: "password"},
        }, authorize: async (credentials) => {
            // external api for users to log in, change it with your own endpoint

            try {

                const formData = new FormData();

                // @ts-ignore
                formData.append("username", credentials.username);

                // @ts-ignore
                formData.append("password", credentials.password);

                console.log("credentials", formData)

                const res = await fetch(`${process.env.API_BASE_URL}/token`, {
                    method: "POST",
                    body: formData,
                })

                // const user = await res.json()
                // console.log("userrrr "+ user.access_token);
                //
                // console.log('sssssss' + user);


                const data: ApiResponse = await res.json();
                console.log("API response", data.access_token);

                if (data.access_token) {
                    const decodedToken: DecodedToken = jwtDecode(data.access_token);

                    return {
                        id: decodedToken.sub,
                        name: credentials.username, // Adjust according to actual user info
                        email: "", // Add actual email if available in the response
                        accessToken: data.access_token,
                        refreshToken: "", // Add refresh token if available in the response
                    } as User;
                }
            } catch (e) {
                console.error("AuthError: ", e);
            }
                return null;
        }
    }),],
});

