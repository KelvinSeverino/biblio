import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import useBookEdit from '../../hooks/book/useBookEdit';

const BookEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        successMessage,
        errorMessage,
        bookField,
        authors,
        subjects,
        handleChange,
        handleMultiSelectChange,
        handleSubmit
    } = useBookEdit(id);

    const onSubmitChange = async (e) => {
        e.preventDefault();
        await handleSubmit();
    };

    const handleMultiSelect = (e) => {
        const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
        handleMultiSelectChange(e.target.name, selectedValues);
    };

    return (
        <div>
            <Header />
            <div className="container">

                {successMessage && <div className="alert alert-success">{successMessage}</div>} 
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <form onSubmit={onSubmitChange} className="pt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-label">Título:</label>
                            <input type="text" name="titulo" className="form-control" value={bookField.titulo} onChange={handleChange} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Editora:</label>
                            <input type="text" name="editora" className="form-control" value={bookField.editora} onChange={handleChange} />
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="form-label">Autores:</label>
                            <select name="autores" className="form-control form-select" multiple value={bookField.autores} onChange={handleMultiSelect}>
                                {authors.map((autor) => (
                                    <option key={autor.codau} value={autor.codau}>{autor.nome}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="form-label">Assuntos:</label>
                            <select name="assuntos" className="form-control form-select" multiple value={bookField.assuntos} onChange={handleMultiSelect}>
                                {subjects.map((assunto) => (
                                    <option key={assunto.codas} value={assunto.codas}>{assunto.descricao}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-4 mt-3">
                            <label className="form-label">Edição:</label>
                            <input type="number" name="edicao" className="form-control" value={bookField.edicao} onChange={handleChange} />
                        </div>

                        <div className="col-md-4 mt-3">
                            <label className="form-label">Ano Publicação:</label>
                            <input type="number" name="ano_publicacao" className="form-control" value={bookField.ano_publicacao} onChange={handleChange} />
                        </div>

                        <div className="col-md-4 mt-3">
                            <label className="form-label">Valor R$:</label>
                            <input type="text" name="valor" className="form-control" value={bookField.valor} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center pt-4">
                        <button type="button" className="btn btn-secondary me-2" onClick={() => navigate("/livros")}>Voltar</button>
                        <button type="submit" className="btn btn-success">Atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookEdit;
