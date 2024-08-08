import React from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {SessionProvider} from "next-auth/react";
import CsoReportPage from "@/app/(dashboard)/cso-dashboard/components/reportData";

const ReportPage = () => {
    return (
        <ScrollArea className="h-full">

            <SessionProvider>
                <CsoReportPage/>
            </SessionProvider>
            {/*<Overview />*/}

        </ScrollArea>
    );
};

export default ReportPage;