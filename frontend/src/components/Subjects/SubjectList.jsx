import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { destroySubject, getSubjects } from "../../services/subjectService";

const SubjectList = () => { 
    const [subjects, setSubjects] = useState([]);
    const [error, setErrorMessage] = useState(null);

    async function fetchSubjects() {
        try {
            const subjectsData = await getSubjects();
            if (!Array.isArray(subjectsData)) {
                throw new Error("Erro ao carregar processar assuntos.");
            }

            setSubjects(subjectsData);
        } catch (e) {
            setSubjects([]);
            setErrorMessage(e.error || "Falha ao obter os assuntos.");
        }
    }

    useEffect(() => {
        fetchSubjects();
    }, [])  

    async function deleteSubject(id) {
        try {
            await destroySubject(id);
            fetchSubjects();
        } catch (e) {
            setErrorMessage(e.error);
        }
    }

    return(
        <div className="container-fluid">
            <h3>Lista Assuntos</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            {!error && subjects.length === 0 && (<div className="alert alert-info">Nenhum assunto encontrado.</div>)}
            {!error && subjects.length > 0 && (            
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
                                            <button onClick={()=>deleteSubject(subject.codas)} className="btn btn-danger">Apagar</button>
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