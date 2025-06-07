import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import useSubjectEdit from "../../hooks/subject/useSubjectEdit";

const SubjectEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();    

    const {
        subjectField,
        errorMessage,
        handleChange,
        handleSubmit
    } = useSubjectEdit(id);

    const onSubmitChange = async (e) => {
        e.preventDefault();
        const result = await handleSubmit();
        if (result.success) {
            navigate("/assuntos");
        }
    };
    
    const clickToBackHandler = () => {
        navigate('/assuntos');
    }

    return(
        <div className='container-fluid'>
            <Header title="Editar Assunto"/>
            <div className='col-12 pt-4'>
                <form onSubmit={onSubmitChange}>

                    {errorMessage && (<div className="alert alert-danger">{errorMessage}</div>)}
                    
                    <div className='row'>
                        <div className='col-12'>
                            <div className="mt-2">
                                <label className="form-label">Descrição:</label>
                                <input type="text" className="form-control" id="descricao" placeholder="Insira descricao" name="descricao" value={subjectField.descricao} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="container d-flex justify-content-center pt-4">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button className="btn btn-warning" onClick={clickToBackHandler}>
                                Voltar
                            </button>
                            <button type="submit" className="btn btn-success">
                                Atualizar
                            </button>
                        </div>
                    </div>              
                </form>
            </div>
        </div>
    )    
}

export default SubjectEdit;