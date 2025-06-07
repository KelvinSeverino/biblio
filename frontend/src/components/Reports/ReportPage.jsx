import useReportData from '../../hooks/report/useReportData';
import useDownloadReport from '../../hooks/report/useDownloadReport';
import Header from '../Header/Header';

const ReportPage = () => {
    const { data, errorMessage: dataError } = useReportData();
    const { handleDownload, errorMessage: downloadError } = useDownloadReport();

    const errorMessage = dataError || downloadError;

    return (
        <div>            
            <Header />            
            <div className="container mt-5">
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <div className="d-flex justify-content-center gap-3 my-4">
                    <button onClick={() => handleDownload('pdf')} className="btn btn-outline-danger">📄 Exportar PDF</button>
                    <button onClick={() => handleDownload('csv')} className="btn btn-outline-success">📊 Exportar CSV</button>
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
