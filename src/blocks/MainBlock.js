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
            <Header/>
            <div className="block1">
                <FirstBlock/>
            </div>
            <div className="block2">
                <SecondBlock/>
            </div>
            <div className="block3">
                <ThirdBlock/>
            </div>
            <div className="block4">
                <Fourth/>
            </div>
            <div className="block5">
                <Footer/>
            </div>
        </div>
    )
}

export default MainBlock;