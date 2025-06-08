import { NavLink } from "react-router-dom";
import useSubjectList from "../../hooks/subject/useSubjectList";
import useSubjectDelete from "../../hooks/subject/useSubjectDelete";

const SubjectList = () => {    
    const { subjects, fetchSubjects, errorMessage: listError } = useSubjectList();
    const { deleteSubject, errorMessage: deleteError, successMessage: deleteSuccess } = useSubjectDelete();

    const handleDelete = async (id) => {
        await deleteSubject(id);
        await fetchSubjects();
    };

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h2 className="text-primary fw-bold mb-0">Assuntos</h2>
                    <small className="text-muted">Lista completa de assuntos cadastrados</small>
                </div>
                <div className="text-end mb-3">
                    <NavLink to="/assuntos/criar" className="btn btn-sm btn-outline-dark">
                        📖 Novo Assunto
                    </NavLink>
                </div>
            </div>

            {listError && <div className="alert alert-danger">{listError}</div>}
            
            {deleteSuccess && <div className="alert alert-success">{deleteSuccess}</div>}
            {deleteError && <div className="alert alert-danger">{deleteError}</div>}

            {!listError && subjects.length === 0 && (
                <div className="alert alert-info">Nenhum assunto encontrado.</div>
            )}

            {!listError && subjects.length > 0 && (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Descrição</th>
                                <th className="text-center" style={{ width: "220px" }}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((subject) => (
                                <tr key={subject.codas}>
                                    <td>{subject.descricao}</td>
                                    <td className="text-center">
                                        <NavLink to={`/assuntos/visualizar/${subject.codas}`} className="btn btn-sm btn-outline-secondary me-2">
                                            Abrir
                                        </NavLink>
                                        <NavLink to={`/assuntos/editar/${subject.codas}`} className="btn btn-sm btn-outline-warning me-2">
                                            Editar
                                        </NavLink>
                                        <button onClick={() => handleDelete(subject.codas)} className="btn btn-sm btn-outline-danger">
                                            Apagar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SubjectList;
