import React, { useEffect, useState } from 'react';
import { fetchReportData, downloadPDF, downloadCsv } from '../../services/reportService';

const ReportPage = () => {
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
                setErrorMessage(e.error || "Falha ao obter os dados do relatório.");
            }
        };

        fetchData();
    }, []);

    const handleDownload = async (type) => {
        try {
            const downloadFn = type === 'pdf' ? downloadPDF : downloadCsv;
            const response = await downloadFn();

            if (!response) {
                throw new Error("Erro ao gerar o arquivo.");
            }

            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `relatorio-livros-por-autor.${type}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (e) {
            setErrorMessage(e.error || "Falha ao baixar o arquivo.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm p-4">
                <h2 className="text-center text-primary mb-4">📖 Relatório de Livros por Autor</h2>

                {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                )}
                
                <div className="d-flex justify-content-center gap-3 mb-4">
                    <button onClick={() => handleDownload('pdf')} className="btn btn-outline-danger">
                        📄 Exportar PDF
                    </button>
                    <button onClick={() => handleDownload('csv')} className="btn btn-outline-success">
                        📊 Exportar CSV
                    </button>
                </div>

                <div className="table-responsive" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                    <table className="table table-hover table-bordered">
                        <thead className="table-dark sticky-top">
                            <tr className="text-center">
                                <th>Autor</th>
                                <th>Título</th>
                                <th>Editora</th>
                                <th>Edição</th>
                                <th>Ano</th>
                                <th>Assunto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item) => (
                                    <tr key={item.id_seq} className="text-center">
                                        <td>{item.autor_nome}</td>
                                        <td>{item.titulo}</td>
                                        <td>{item.editora}</td>
                                        <td>{item.edicao}</td>
                                        <td>{item.ano_publicacao}</td>
                                        <td>{item.assunto}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center text-muted">Nenhum dado disponível</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportPage;
