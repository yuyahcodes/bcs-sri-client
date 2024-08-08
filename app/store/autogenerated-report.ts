import useAuthStore from "@/app/store/index";

const autoGenerateReport = async (reportData: any) => {
    const { fetchWithAuth } = useAuthStore.getState();
    const url = new URL(`${process.env.NEXT_PUBLIC_API}/results`);

    // Append query parameters
    url.searchParams.append('gender_ethnicity', reportData.gender_ethnicity);
    url.searchParams.append('start_date', reportData.starting_date);
    url.searchParams.append('end_date', reportData.ending_date);
    url.searchParams.append('skip', '0');  // You can adjust this as needed
    url.searchParams.append('limit', '100'); // Adjust the limit as necessary

    try {
        const response = await fetchWithAuth(url.toString(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Error generating reports:', error);
        throw error;
    }
};

export default autoGenerateReport;