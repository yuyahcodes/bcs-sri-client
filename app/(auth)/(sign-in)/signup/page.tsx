import React from 'react';
import UserAuthForm from "@/app/(auth)/(sign-in)/user-auth-form";
import SingupForm from "@/app/(auth)/(sign-in)/signup/signup-form";
import Link from "next/link";

const SignUp = () => {
    return (
        <div
            className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
            <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
                <div className='absolute inset-0 bg-blueGem-900'/>
                <div className='relative z-20 flex items-center text-lg font-medium'>
                    BCS Sri Lanka Project
                </div>

                {/*<img*/}
                {/*    src={}*/}
                {/*    className='relative m-auto'*/}
                {/*    width={301}*/}
                {/*    height={60}*/}
                {/*    alt='Vite'*/}
                {/*/>*/}

                <div className='relative z-20 mt-auto'>
                    <blockquote className='space-y-2'>
                        <p className='text-lg'>
                            &ldquo;Optimizing Solutions for Identifying Inaccuracies in GESI Conversations in Sri Lanka
                            &rdquo;
                        </p>
                        <footer className='text-sm'>~ OMDENA</footer>
                    </blockquote>
                </div>
            </div>
            <div className='lg:p-8'>
                <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
                    <div className='flex flex-col space-y-2 text-left'>
                        <h1 className='text-2xl text-center font-semibold tracking-tight'>Create an Account</h1>
                        <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-300">
                            Already have an account?
                            <Link className="text-blue-600 dark:text-blue-400" href="/"> Sign In </Link>
                            Now.
                        </p>
                    </div>
                    <SingupForm/>
                    <p className='px-8 text-center text-sm text-muted-foreground'>
                        By clicking login, you agree to our{' '}
                        <a
                            href='/terms'
                            className='underline underline-offset-4 hover:text-primary'
                        >
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a
                            href='/privacy'
                            className='underline underline-offset-4 hover:text-primary'
                        >
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;