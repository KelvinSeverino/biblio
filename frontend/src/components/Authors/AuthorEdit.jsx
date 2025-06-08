import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import useAuthorEdit from "../../hooks/author/useAuthorEdit";

const AuthorEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();    

    const {
        successMessage,
        errorMessage,
        authorField,
        handleChange,
        handleSubmit
    } = useAuthorEdit(id);

    const onSubmitChange = async (e) => {
        e.preventDefault();
        await handleSubmit();
    };

    const clickToBackHandler = () => navigate("/autores");

    return (
        <div>
            <Header />
            <div className="container">
                <div className="col-12 pt-4">
                    <form onSubmit={onSubmitChange}>

                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        {errorMessage && (<div className="alert alert-danger">{errorMessage}</div>)}
                        
                        <div className="row">
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="form-label">Nome:</label>
                                    <input type="text" className="form-control" id="nome" placeholder="Insira nome" name="nome" value={authorField.nome} onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="d-flex justify-content-center pt-4">
                            <button type="button" className="btn btn-secondary me-2" onClick={clickToBackHandler}>Voltar</button>
                            <button type="submit" className="btn btn-success">Atualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthorEdit;
