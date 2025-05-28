import axios from 'axios';

const reportsAPI = axios.create({ baseURL: "http://localhost:8080/api/relatorios" });

async function fetchReportData() {    
    try {
        const response = await reportsAPI.get("");  
        return response.data;
    } catch (e) {
        console.error("Erro ao buscar dados do relatório:", e);
        return;
    }
}

async function downloadPDF() {    
    try {
        const response = await reportsAPI.get('/pdf', { responseType: 'blob' });
        return response;
    } catch (e) {
        console.error("Erro ao baixar PDF:", e);
        return;
    }
}

async function downloadCsv() {    
    try {
        const response = await reportsAPI.get('/csv', { responseType: 'blob' });
        return response;
    } catch (e) {
        console.error("Erro ao baixar CSV:", e);
        return;
    }
}

export {
    fetchReportData,
    downloadPDF,
    downloadCsv
};
