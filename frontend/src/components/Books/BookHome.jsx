import BookList from './BookList';
import Header from '../Header/Header';

const BookHome = () => {

    return (
        <div className="container-fluid">
            <Header />
            <div className='row pt-4'>
                <div className='col-md-12'>
                    <BookList />
                </div>
            </div>
        </div>
    ) 
}

export default BookHome;