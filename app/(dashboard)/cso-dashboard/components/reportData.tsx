// pages/reports.tsx
import {NextPage} from 'next';
import Report from './report';
import {CalendarDateRangePicker} from "@/components/date-range-picker";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {SessionProvider} from "next-auth/react";
import React from "react";
import CsoReport from "./report";

const reportData = {
    id: 1,
    gender_ethnicity: "Muslims",
    starting_date: "01/01/2023",
    ending_date: "01/07/2023",
    language: "english",
    area: "all srilanka",
    sector: "education",
    report_content: {
        newsletter_summary: {
            summary: "This newsletter provides a comprehensive overview of recent news articles focusing on crucial information related to gender, ethnicity, and discrimination in Sri Lanka. The articles covered highlight various issues such as gender-based discrimination, ethnic tension, and instances of hate speech. Each article is analyzed to understand the discriminatory and hateful perspectives, providing insights into the prevailing social dynamics in the country.",
            articles: [
                {
                    website_name: "Daily News",
                    title: "Gender Discrimination in the Workplace",
                    date: "2023-10-01",
                    gender_or_ethnicity: "Gender",
                    sector: "Employment",
                    url: "https://www.dailynews.lk/gender-discrimination-workplace",
                    location_or_provenance: "Colombo",
                    language: "English",
                    reasoning_discrimination: "The article discusses systematic gender discrimination in corporate settings, highlighting instances where women are paid less than their male counterparts for the same work.",
                    reasoning_hateful: "The piece points out instances of derogatory comments made by male supervisors towards female employees, which can be classified as hate speech."
                },
                {
                    website_name: "Lanka News Web",
                    title: "Ethnic Tensions Rise in Eastern Province",
                    date: "2023-10-03",
                    gender_or_ethnicity: "Ethnicity",
                    sector: "Social",
                    url: "https://www.lankanewsweb.lk/ethnic-tensions-eastern-province",
                    location_or_provenance: "Batticaloa",
                    language: "Tamil",
                    reasoning_discrimination: "The article covers recent clashes between ethnic groups in the Eastern Province, focusing on discriminatory practices against minority communities.",
                    reasoning_hateful: "Reports of hate speech during public demonstrations and on social media platforms are highlighted, exacerbating ethnic tensions."
                }
            ]
        },
        articles_list: [
            {
                website_name: "Daily News",
                title: "Gender Discrimination in the Workplace",
                date: "2023-10-01",
                gender_or_ethnicity: "Gender",
                sector: "Employment",
                url: "https://www.dailynews.lk/gender-discrimination-workplace",
                location_or_provenance: "Colombo",
                language: "English",
                reasoning_discrimination: "The article discusses systematic gender discrimination in corporate settings, highlighting instances where women are paid less than their male counterparts for the same work.",
                reasoning_hateful: "The piece points out instances of derogatory comments made by male supervisors towards female employees, which can be classified as hate speech."
            },
            {
                website_name: "Lanka News Web",
                title: "Ethnic Tensions Rise in Eastern Province",
                date: "2023-10-03",
                gender_or_ethnicity: "Ethnicity",
                sector: "Social",
                url: "https://www.lankanewsweb.lk/ethnic-tensions-eastern-province",
                location_or_provenance: "Batticaloa",
                language: "Tamil",
                reasoning_discrimination: "The article covers recent clashes between ethnic groups in the Eastern Province, focusing on discriminatory practices against minority communities.",
                reasoning_hateful: "Reports of hate speech during public demonstrations and on social media platforms are highlighted, exacerbating ethnic tensions."
            }
        ]
    },
    created_at: "2024-07-13T16:55:48.917951"
};

const CsoReportPage: NextPage = () => {
    return (
        <div>

            <CsoReport />

        </div>

    )
        ;
};

export default CsoReportPage;
