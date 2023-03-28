import './MainBlock.css'
import Header from './Header';
import FirstBlock from './FirsBlock';
import SecondBlock from './SecondBlock';
import ThirdBlock from './ThirdBlock';
import Fourth from './Fourth';
import Footer from './Footer';

function MainBlock() {

    return(
        <div className='main-block'>
            <FirstBlock/>
            <Header/>
            <ThirdBlock/>
            <SecondBlock/>
            <Footer/>
            <Fourth/>
        </div>
    )
}

export default MainBlock;