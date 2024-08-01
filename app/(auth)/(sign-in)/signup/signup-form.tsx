"use client"
import { HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/custom/button'
import { PasswordInput } from '@/components/custom/password-input'
import { cn } from '@/lib/utils'
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { RegisterSchema} from "@/schemas";
import FormError from "@/app/(auth)/_components/formError/form-error";
import FormSuccess from "@/app/(auth)/_components/formSuccess/form-success";
import {registerAction} from "@/app/lib/actions/actions";

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}


const SignUpForm = ({ className, ...props }: UserAuthFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirm_password: '',
        },
    })

    const onSubmit = async (formData: z.infer<typeof RegisterSchema>) => {
        setIsLoading(true);
        setError('');
        setSuccess('');
        try {
            const data = await registerAction(formData);
            setError(data?.error);
            // @ts-ignore
            setSuccess(data?.success);
            if (!data?.error) {
                toast.success("Sign in success.");
            }
        } catch (e) {
            setError("Invalid Email or Password");
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <div className='grid gap-2'>
                        <FormField
                            control={form.control}
                            name='username'
                            render={({ field }) => (
                                <FormItem className='space-y-1'>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Enter Username' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className='space-y-1'>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Enter Email' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem className='space-y-2'>
                                    <div className='flex items-center justify-between'>
                                        <FormLabel>Password</FormLabel>
                                        {/*<Link*/}
                                        {/*    href='#'*/}
                                        {/*    className='text-sm font-medium text-muted-foreground hover:opacity-75'*/}
                                        {/*>*/}
                                        {/*    Forgot password?*/}
                                        {/*</Link>*/}
                                    </div>
                                    <FormControl>
                                        <PasswordInput placeholder='********' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='confirm_password'
                            render={({ field }) => (
                                <FormItem className='space-y-2'>
                                    <div className='flex items-center justify-between'>
                                        <FormLabel>Confirm Password</FormLabel>
                                    </div>
                                    <FormControl>
                                        <PasswordInput placeholder='********' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='mt-2' loading={isLoading}>
                            Sign Up
                        </Button>

                    </div>
                </form>
            </Form>
            <ToastContainer position="bottom-right"/>
        </div>
    )
}
export default SignUpForm;
