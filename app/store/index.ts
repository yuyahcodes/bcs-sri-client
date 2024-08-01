import create from 'zustand';
import { getSession } from 'next-auth/react';

interface AuthState {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
    fetchWithAuth: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
}

const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    setAccessToken: (token) => set({ accessToken: token }),
    fetchWithAuth: async (input, init = {}) => {
        const session = await getSession();
        const headers = new Headers(init.headers);

        if (session && session.user && session.user.accessToken) {
            headers.set('Authorization', `Bearer ${session.user.accessToken}`);
        }

        return fetch(input, { ...init, headers });
    },
}));

export default useAuthStore;
