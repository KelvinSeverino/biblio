import SubjectList from './SubjectList';
import Header from '../Header/Header';
import useSubjectForm from '../../hooks/subject/useSubjectForm';

const SubjectHome = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
            color: color,
            backgroundColor: color,
            height: 3,
            }}
        />
    );

    const {
        successMessage,
        errorMessage,
        subjectField,
        changeSubjectFieldHandler,
        handleSubmit,
        clickToBackHome,
    } = useSubjectForm(); 

    return (
        <div className="container-fluid">
                <Header title="Autor"/>
                <div className='row pt-4'>
                    <div className='col-md-4'>
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
                    <div className='col-md-8'>
                        <SubjectList />
                    </div>
                </div>
            <ColoredLine color="black"/>
            <div className='container d-flex justify-content-center'>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button className='btn btn-secondary' onClick={clickToBackHome}>Home</button>
                </div>
            </div>
        </div>
    ) 
}

export default SubjectHome;