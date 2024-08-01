import * as z from 'zod'

export const LoginSchema = z.object({
    username: z.string().min(1, {
        message: "Username is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
})

export const RegisterSchema = z.object({
    username: z.string().min(1, {
        message: "Username is required",
    }),
    email: z.string().email({
        message: "Email is required"
    }),

    password: z.string().min(5, {
        message: "Password is required",
    }),
    confirm_password: z.string().min(5, {
        message: "Password is required",
    }),

}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["password_confirmation"], // The path of the error field
});