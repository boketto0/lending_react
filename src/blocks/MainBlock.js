import './MainBlock.css'
import Header from './Header';
import FirstBlock from './FirsBlock';
import SecondBlock from './SecondBlock';
import ThirdBlock from './ThirdBlock';

function MainBlock() {

    return(
        <div className='main-block'>
            <FirstBlock/>
            <Header/>
            <ThirdBlock/>
            <SecondBlock/>
        </div>
    )
}

export default MainBlock;