import React, { } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaTags, FaUser, FaUsers, FaStore, FaShoppingCart } from 'react-icons/fa';

function Home() {
    return (
        <div className="container-fluid py-5" style={{ backgroundColor: "#e6f4f9", minHeight: "100vh" }}>
            <h1 className="text-center text-primary fw-bold">Biblio</h1>
            <p className="text-center text-muted">Gerencie livros, autores, assuntos.</p>

            <div className="row text-center py-4">
                <div className="col-md-3 mb-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <FaTags size={40} className="text-primary mb-3" />
                            <h5 className="card-title">Assuntos</h5>
                            <p className="card-text">Cadastre e gerencie os assuntos literários.</p>
                            <Link to="/assuntos" className="btn btn-primary w-100">Acessar</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <FaUser size={40} className="text-success mb-3" />
                            <h5 className="card-title">Autores</h5>
                            <p className="card-text">Adicione e edite informações de autores.</p>
                            <Link to="/autores" className="btn btn-success w-100">Acessar</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <FaBook size={40} className="text-warning mb-3" />
                            <h5 className="card-title">Livros</h5>
                            <p className="card-text">Gerencie seu acervo de livros.</p>
                            <Link to="/livros" className="btn btn-warning w-100">Acessar</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <FaUsers size={40} className="text-danger mb-3" />
                            <h5 className="card-title">Usuários</h5>
                            <p className="card-text">Controle de usuários do sistema.</p>
                            <Link to="/users" className="btn btn-danger w-100">Acessar</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-4 shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="text-primary"><FaStore className="me-2" />Leitor</h5>
                        <p className="text-muted mb-0">Acesse o acervo e gerencie suas leituras com facilidade.</p>
                    </div>
                    <div>
                        <Link to="/acervo" className="btn btn-primary me-2">
                            <FaStore className="me-1" /> Acessar Acervo
                        </Link>
                        <Link to="/carrinho" className="btn btn-outline-primary">
                            <FaShoppingCart className="me-1" /> Ver Carrinho
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;