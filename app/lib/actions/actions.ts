"use server"

import {signIn, signOut} from "@/auth";
import {CSO_LOGIN_REDIRECT, DEFAULT_LOGIN_REDIRECT} from "@/routes";
import {AuthError} from "next-auth";
import {LoginSchema, RegisterSchema} from "@/schemas";
import {TypeOf} from "zod";


export async function loginAction(formData: TypeOf<typeof LoginSchema>, callbackUrl?: string) {
    const validatedFields = LoginSchema.parse(formData);
    // console.log("validated " + validatedFields.username, validatedFields.password);
    const {username , password } = validatedFields

    try {
        await signIn("credentials", {
            username,
            password,
            redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials!"}
                default:
                    return {error: "Wrong Username or Password"}
            }
        }
        throw error;
    }
}

export async function csoLoginAction(formData: TypeOf<typeof LoginSchema>, callbackUrl?: string) {
    const validatedFields = LoginSchema.parse(formData);
    // console.log("validated " + validatedFields.username, validatedFields.password);
    const {username , password } = validatedFields

    try {
        await signIn("credentials", {
            username,
            password,
            redirectTo: callbackUrl || CSO_LOGIN_REDIRECT,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials!"}
                default:
                    return {error: "Wrong Username or Password"}
            }
        }
        throw error;
    }
}


export async function signOutAction() {
    await signOut()
}

export async function registerAction(formData: TypeOf<typeof RegisterSchema>, callbackUrl?: string) {
    const validatedFields = RegisterSchema.parse(formData);
    // console.log(validatedFields);
    const {username, email , password } = validatedFields

    const endpoint = process.env.API_BASE_URL;


    //sign up with api and redirect
    try {
        const response = await fetch(endpoint + "/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, email, password}),
        });

        if (response.ok) {
            //return success message

            console.log("response ok")
            await signIn("credentials", {
                username,
                password,
                redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
            });
            return { success: "Registration completed successfully!" };

        } else {
            return { error: "Failed to sign up!" };
        }
    } catch (error) {
        throw error;
    }

}
