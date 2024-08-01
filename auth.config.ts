import {NextAuthConfig} from 'next-auth';
import {headers} from "next/headers";


// @ts-ignore
export const authConfig = {
    pages: {
        signIn: '/(sign-in)',
    },
    providers: [
        // added later in route.ts since it requires bcrypt which is only compatible with Node.js
        // while this file is also used in non-Node.js environments
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            let isLoggedIn = !!auth?.user;
            let isOnDashboard = nextUrl.pathname.startsWith('/');

            if (isOnDashboard) {
                return isLoggedIn;
                // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                // don't redirect authenticated users to dashboard, let them go to the page they requested
                // return Response.redirect(new URL('/dashboard', nextUrl));
            }

            return true;
        },
        // @ts-ignore
        async session({ session, token }) {

            session.user = {
                ...session.user,
                // @ts-ignore
                id: token.id,
                name: token.name,
                // @ts-ignore
                email: token.email,
                // @ts-ignore
                accessToken: token.accessToken,
            };
            return session;
        },

        async jwt({ token, user, account }) {
            if (account && user) {
                token.accessToken = user.accessToken;
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;

                const decodedToken = JSON.parse(Buffer.from(user.accessToken.split(".")[1], "base64").toString());
                if (decodedToken) {
                    token.userId = decodedToken.sub;
                    token.accessTokenExpires = decodedToken.exp * 1000;
                }
            }

            // @ts-ignore
            if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
                return token;

            }
            // return await refreshAccessToken(token);

            return {
                ...token,
                error: "TokenExpired",
            };
        },

    },
} satisfies NextAuthConfig;


// @ts-ignore
async function refreshAccessToken(token) {
    console.log("Now refreshing the expired token...");

//redirect to login page since token expired


    try {
        const formData = new URLSearchParams();
        formData.append('refresh', token.refreshToken);

        const res = await fetch(`${process.env.API_BASE_URL}/refresh_token`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // Add any additional headers required by your API
            },
            body: formData.toString()
        });

        const { success, data } = await res.json();

        if (!success) {
            console.log("The token could not be refreshed!");
            throw data;
        }

        console.log("The token has been refreshed successfully.");

        // get some data from the new access token such as exp (expiration time)
        const decodedAccessToken = JSON.parse(Buffer.from(data.accessToken.split(".")[1], "base64").toString());

        return {
            ...token,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken ?? token.refreshToken,
            accessTokenExpires: decodedAccessToken["exp"] * 1000,
            error: "",
        };
    } catch (error) {
        console.log(error);

        // return an error if something goes wrong
        return {
            ...token,
            error: "RefreshAccessTokenError", // attention!
        };
    }
}
