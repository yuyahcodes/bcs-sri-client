import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {SessionProvider} from "next-auth/react";
import CsoClassifier from "@/app/(dashboard)/cso-dashboard/classifiers/_components/classifier";

const ClassifiersPage = () => {
    return (
        <div>
            <div className="w-full">
                <Card>
                    <CardHeader>
                        <CardTitle>Input News Article Name</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SessionProvider>
                            <CsoClassifier />
                        </SessionProvider>
                        {/*<Overview />*/}
                    </CardContent>
                </Card>

            </div>
        </div>
    );
};

export default ClassifiersPage;