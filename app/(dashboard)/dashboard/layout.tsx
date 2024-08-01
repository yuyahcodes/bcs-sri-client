import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';
import {SessionProvider} from "next-auth/react";

export const metadata: Metadata = {
  title: 'Dashboard | BCS Sri Lanka Project',
  description: 'Optimizing Solutions for Identifying Inaccuracies in GESI Conversations in Sri Lanka\n'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <SessionProvider>
      <Header />
        </SessionProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">{children}</main>
      </div>
    </>
  );
}
