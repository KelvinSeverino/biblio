import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { destroySubject, getSubjects } from "../../services/subjectService";

const SubjectList = () => { 
    const [subjects, setSubjects] = useState([])

    async function fetchSubjects() {
        const subjectsData = await getSubjects();
        // console.log(subjectsData);
        setSubjects(subjectsData)
    }

    useEffect(() => {
        fetchSubjects();
    }, [])    

    async function deleteSubject(id) {
        await destroySubject(id);
        fetchSubjects();
    }

    return(
        <div className="container-fluid">
            <h3>Lista Assuntos</h3>
            {<table className="table table-bordered">
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
            </table>}
        </div>
    )
}

export default SubjectList;