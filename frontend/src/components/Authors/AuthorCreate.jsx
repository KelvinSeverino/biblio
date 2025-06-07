import Header from '../Header/Header';
import useAuthorForm from '../../hooks/author/useAuthorForm';

const AuthorCreate = () => {
    const {
        successMessage,
        errorMessage,
        authorField,
        changeAuthorFieldHandler,
        handleSubmit,
    } = useAuthorForm(); 

    return (
        <div className="container-fluid">
            <Header />
            <div className='row pt-4'>
                <div className='col-md-12'>
                    <h3>Informe Dados do Autor</h3>
                    <form onSubmit={handleSubmit}>
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        <div className='row'>
                            <div className='col-12'>
                                <div className="mt-2">
                                    <label className="form-label">Nome:</label>
                                    <input type="text" className="form-control" id="nome" placeholder="Insira nome" name="nome" value={authorField.nome} onChange={changeAuthorFieldHandler} />
                                </div>
                            </div>
                        </div>    
                        
                        <br />
                        <button type="submit" className="btn btn-success">Gravar</button>                             
                    </form>
                </div>
            </div>
        </div>
    ) 
}

export default AuthorCreate;