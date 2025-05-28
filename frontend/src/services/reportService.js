import apiService from "./apiService";

async function fetchReportData() {    
    try {
        const response = await apiService.get("/relatorios");  
        return response.data;
    } catch (e) {
        throw e; // Lanca o erro para ser tratado no apiService
    }
}

async function downloadPDF() {    
    try {
        const response = await apiService.get("/relatorios/pdf", { responseType: "blob" });
        return response;
    } catch (e) {
        throw e;
    }
}

async function downloadCsv() {    
    try {
        const response = await apiService.get("/relatorios/csv", { responseType: "blob" });
        return response;
    } catch (e) {
        throw e;
    }
}

export {
    fetchReportData,
    downloadPDF,
    downloadCsv
};
