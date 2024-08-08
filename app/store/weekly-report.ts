import useAuthStore from "@/app/store/index";

const generateReport = async (reportData: any) => {
    const {fetchWithAuth} = useAuthStore.getState();
    const url = process.env.NEXT_PUBLIC_API + '/generate_report';
    try {
        const response = await fetchWithAuth(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reportData),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error generating reports:', error);
        throw error;
    }
};

export default generateReport;


//auto generated reports
