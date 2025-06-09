import Header from '../Header/Header';
import useBookForm from '../../hooks/book/useBookForm';
import CurrencyInput from 'react-currency-input-field';

const BookCreate = () => {
    const {
        successMessage,
        errorMessage,
        bookField,
        authors,
        subjects,
        handleChange,
        handleSubmit,
    } = useBookForm();

    return (
        <div>
            <Header />
            <div className="container">
                <div className='row pt-4'>
                    <div className='col-md-12'>
                        <h3>Informe Dados do Livro</h3>
                        <form onSubmit={handleSubmit}>
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Título:</label>
                                        <input type="text" className="form-control" id="titulo" placeholder="Insira titulo" name="titulo" value={bookField.titulo} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Editora:</label>
                                        <input type="text" className="form-control" id="editora" placeholder="Insira editora" name="editora" value={bookField.editora} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-6 py-2'>
                                    <label className="form-label">Autores:</label>
                                    <select className="form-control form-select" id="autores" name="autores" multiple onChange={e => {
                                        const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
                                        handleChange({ target: { name: "autores", value: selectedValues } });
                                        }}>
                                        {authors.map((opcao) => (<option key={opcao.codau} value={opcao.codau}>{opcao.nome}</option>))}
                                    </select>
                                    </div>
                                    <div className='col-6 py-2'>
                                    <label className="form-label">Assuntos:</label>
                                    <select className="form-control form-select" id="assuntos" name="assuntos" multiple onChange={e => {
                                        const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
                                        handleChange({ target: { name: "assuntos", value: selectedValues } });
                                        }}>
                                        {subjects.map((opcao) => (<option key={opcao.codas} value={opcao.codas}>{opcao.descricao}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div className='row pb-3'>
                                <div className='col-3'>
                                    <div className="mt-2">
                                        <label className="form-label">Edição:</label>
                                        <input type="number" step="any" className="form-control" id="edicao" placeholder="Insira edicao" name="edicao" value={bookField.edicao} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className="mt-2">
                                        <label className="form-label">Ano Publicação:</label>
                                        <input type="number" min="1000" max="9999" className="form-control" id="ano_publicacao" placeholder="Insira Ano" name="ano_publicacao" value={bookField.ano_publicacao} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="mt-2">
                                        <label className="form-label">Valor:</label>
                                        <CurrencyInput
                                            id="valor" name="valor" className="form-control" 
                                            placeholder="Insira valor"
                                            value={bookField.valor} 
                                            decimalsLimit={2}
                                            intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                                            // groupSeparator="."  // Define "." como separador de milhar
                                            // decimalSeparator="," // Define "," como separador decimal
                                            onValueChange={(value) => handleChange({ target: { name: "valor", value } })}
                                        />                                    
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success">Gravar</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    ) 
}

export default BookCreate;