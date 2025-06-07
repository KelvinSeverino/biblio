import SubjectList from './SubjectList';
import Header from '../Header/Header';

const SubjectHome = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className='row pt-4'>
                    <div className='col-md-12'>
                        <SubjectList />
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default SubjectHome;