import './FirsBlock.css'
import Icon2 from '../images/firsblock_images/firstblock_picture2.svg';
import Icon1 from '../images/firsblock_images/firstblock_picture1.svg'
import Icon3 from '../images/firsblock_images/firstblock_picture3.svg';

function FirstBlock() {

    return(
        <div>
            <div className='first-block '>
                    <div className='first-block__title'>Дизайн-система</div>
                    <div className='first-block__text1'>Sber tech</div>
                        <div className='first-block__circle1'/>
                        <div className='first-block__circle2'/>
                    <div className='first-block__picture__block'>
                        <img className='first-block__picture1' src={Icon1}/>
                        <img className='first-block__picture2' src={Icon2}/>
                        <img className='first-block__picture3' src={Icon3}/>
                    </div>
            </div>
        </div>
    )
}

export default FirstBlock;
