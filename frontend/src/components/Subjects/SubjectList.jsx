import { NavLink } from "react-router-dom";
import useSubjectList from "../../hooks/subject/useSubjectList";
import useSubjectDelete from "../../hooks/subject/useSubjectDelete";

const SubjectList = () => {    
    const { subjects, fetchSubjects, errorMessage: listError } = useSubjectList();
    const { deleteSubject, errorMessage: deleteError } = useSubjectDelete();

    const handleDelete = async (id) => {
        await deleteSubject(id);
        await fetchSubjects();
    };

    return(
        <div className="container-fluid">
            <h3>Lista Assuntos</h3>
            {listError && <div className="alert alert-danger">{listError}</div>}
            {deleteError && <div className="alert alert-danger">{deleteError}</div>}

            {!listError && subjects.length === 0 && (
                <div className="alert alert-info">Nenhum Autor encontrado.</div>
            )}

            {!listError && subjects.length > 0 && (           
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subjects.map((subject, i) => {
                                return (
                                    <tr key={subject.codas}>
                                        <td>{subject.descricao}</td>
                                        <td>
                                            <NavLink to={`/assuntos/view/${subject.codas}`} className="btn btn-secondary">Abrir</NavLink>
                                            <NavLink to={`/assuntos/edit/${subject.codas}`} className="btn btn-warning mx-2">Editar</NavLink>
                                            <button onClick={() => handleDelete(subject.codas)} className="btn btn-danger">Apagar</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default SubjectList;