import Header from '../Header/Header';
import useSubjectForm from '../../hooks/subject/useSubjectForm';

const SubjectCreate = () => {
    const {
        successMessage,
        errorMessage,
        subjectField,
        changeSubjectFieldHandler,
        handleSubmit,
    } = useSubjectForm(); 

    return (
        <div>            
            <Header />            
            <div className="container">
                <div className='row pt-4'>
                    <div className='col-md-12'>
                        <h3>Informe Dados do Assunto</h3>
                        <form onSubmit={handleSubmit}>
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <div className='row'>
                                <div className='col-12'>
                                    <div className="mt-2">
                                        <label className="form-label">Descrição:</label>
                                        <input type="text" className="form-control" id="descricao" placeholder="Insira descricao" name="descricao" value={subjectField.descricao} onChange={changeSubjectFieldHandler} />
                                    </div>
                                </div>
                            </div>    
                            
                            <br />
                            <button type="submit" className="btn btn-success">Gravar</button>                             
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default SubjectCreate;