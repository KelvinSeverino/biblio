import BookList from './BookList';
import Header from '../Header/Header';
import useBookForm from '../../hooks/book/useBookForm';

const BookHome = () => {    
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
        bookField,
        authors,
        subjects,
        changeBookFieldHandler,
        handleSubmit,
        clickToBackHome,
    } = useBookForm();

    return (
        <div className="container-fluid">
                <Header title="Livros"/>
                <div className='row pt-4'>
                    <div className='col-md-4'>
                        <h3>Informe Dados do Livro</h3>
                        <form onSubmit={handleSubmit}>
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Título:</label>
                                        <input type="text" className="form-control" id="titulo" placeholder="Insira titulo" name="titulo" value={bookField.titulo} onChange={changeBookFieldHandler} />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Editora:</label>
                                        <input type="text" className="form-control" id="editora" placeholder="Insira editora" name="editora" value={bookField.editora} onChange={changeBookFieldHandler} />
                                    </div>
                                </div>
                                <div className='col-6 py-2'>
                                    <label className="form-label">Autores:</label>
                                    <select className="form-control form-select" id="autores" name="autores" multiple onChange={e => {
                                        const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
                                        changeBookFieldHandler({ target: { name: "autores", value: selectedValues } });
                                        }}>
                                        {authors.map((opcao) => (<option key={opcao.codau} value={opcao.codau}>{opcao.nome}</option>))}
                                    </select>
                                    </div>
                                    <div className='col-6 py-2'>
                                    <label className="form-label">Assuntos:</label>
                                    <select className="form-control form-select" id="assuntos" name="assuntos" multiple onChange={e => {
                                        const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
                                        changeBookFieldHandler({ target: { name: "assuntos", value: selectedValues } });
                                        }}>
                                        {subjects.map((opcao) => (<option key={opcao.codas} value={opcao.codas}>{opcao.descricao}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div className='row pb-3'>
                                <div className='col-3'>
                                    <div className="mt-2">
                                        <label className="form-label">Edição:</label>
                                        <input type="number" step="any" className="form-control" id="edicao" placeholder="Insira edicao" name="edicao" value={bookField.edicao} onChange={changeBookFieldHandler} />
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className="mt-2">
                                        <label className="form-label">Ano Publicação:</label>
                                        <input type="number" min="1000" max="9999" className="form-control" id="ano_publicacao" placeholder="Insira Ano" name="ano_publicacao" value={bookField.ano_publicacao} onChange={changeBookFieldHandler} />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="mt-2">
                                        <label className="form-label">Valor:</label>
                                        <input type="text" className="form-control" id="valor" placeholder="Insira valor" name="valor" value={bookField.valor} onChange={changeBookFieldHandler} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success">Gravar</button>
                        </form>

                    </div>
                    <div className='col-md-8'>
                        <BookList />
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

export default BookHome;