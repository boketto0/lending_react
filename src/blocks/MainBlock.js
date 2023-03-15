import './MainBlock.css'
import Header from './Header';
import FirstBlock from './FirsBlock';
import SecondBlock from './SecondBlock';

function MainBlock() {
    return(
        <div>
            <div className='main-block'>
                <FirstBlock></FirstBlock>
                <Header></Header>
                <SecondBlock/>
            </div>
        </div>
    )
}

export default MainBlock;