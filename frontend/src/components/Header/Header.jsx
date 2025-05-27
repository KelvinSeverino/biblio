import React, { } from 'react';

function Header({ title }) {

    return (
        <div className="container-fluid">
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <div className="d-flex justify-content-center flex-grow-1">
                        <span className="nav-text"><strong>{ title } | Biblio</strong></span>
                    </div>

                    <ul className="nav">
                        <li className="nav-item">
                            <button className='btn btn-dark btn-sm'>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header