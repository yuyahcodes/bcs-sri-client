import React from 'react';
import ReportData from "@/components/reportData";
import {SessionProvider} from "next-auth/react";
import {ScrollArea} from "@/components/ui/scroll-area";

const WeeklyReportPage = () => {
    return (
        <ScrollArea className="h-full">

            <SessionProvider>
                <ReportData/>
            </SessionProvider>
            {/*<Overview />*/}

        </ScrollArea>
    );
};

export default WeeklyReportPage;