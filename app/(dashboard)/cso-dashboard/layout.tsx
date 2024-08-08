import Header from '@/components/layout/header';
import type { Metadata } from 'next';
import {SessionProvider} from "next-auth/react";
import CsoSidebar from "@/app/(dashboard)/cso-dashboard/components/sidebar";

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
        <CsoSidebar />
        <main className="flex-1 overflow-hidden pt-16">{children}</main>
      </div>
    </>
  );
}
