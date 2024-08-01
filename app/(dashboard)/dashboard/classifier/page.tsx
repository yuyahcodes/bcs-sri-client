import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {SessionProvider} from "next-auth/react";
import Classifier from "@/app/(dashboard)/dashboard/classifier/_components/classifier";

const ClassifierPage = () => {
    return (
        <div>
            <div className="w-full">
                <Card>
                    <CardHeader>
                        <CardTitle>Input text to classify</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SessionProvider>
                            <Classifier />
                        </SessionProvider>
                        {/*<Overview />*/}
                    </CardContent>
                </Card>

            </div>
        </div>
    );
};

export default ClassifierPage;