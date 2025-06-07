import { useState } from 'react';
import { downloadPDF, downloadCsv } from '../../services/reportService';

const useDownloadReport = () => {
    const [errorMessage, setErrorMessage] = useState(null);

    const handleDownload = async (type) => {
        try {
            const downloadFn = type === 'pdf' ? downloadPDF : downloadCsv;
            const response = await downloadFn();

            if (!response) {
                throw new Error("Erro ao gerar o arquivo.");
            }

            const blob = new Blob([response.data], {
                type: response.headers['content-type']
            });

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `relatorio-livros-por-autor.${type}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (e) {
            setErrorMessage(e.error);
        }
    };

    return { handleDownload, errorMessage };
};

export default useDownloadReport;
