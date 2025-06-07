import { useEffect, useState } from 'react';
import { fetchReportData } from '../../services/reportService';

const useReportData = () => {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reportData = await fetchReportData();

                if (!Array.isArray(reportData)) {
                    throw new Error("Erro ao carregar relatório.");
                }

                setData(reportData);
                setErrorMessage(null);
            } catch (e) {
                setData([]);
                setErrorMessage(e.error);
            }
        };

        fetchData();
    }, []);

    return { data, errorMessage };
};

export default useReportData;
