import AuthorList from './AuthorList';
import Header from '../Header/Header';

const AuthorHome = () => {
    return (
        <div className="container-fluid">
            <Header title="Autor"/>                
            <div className='row pt-4'>
                <div className='col-md-12'>
                    <AuthorList />
                </div>
            </div>
        </div>
    ) 
}

export default AuthorHome;