import './List1.css';
import ListWrapper1 from './ListWrapper1';
import Icon1 from '../images/list1_images/icon1.1.svg'
import Icon2 from '../images/list1_images/icon1.2.svg'
import Icon3 from '../images/list1_images/icon1.3.svg'
import Icon4 from '../images/list1_images/icon1.4.svg'

function List1(props) {

  const  listItems = [
    {
      picture: '',
      icon: <img src={Icon1}/>,
      text: 'Запускать продукты быстрее и дешевле'
    },
    {
      picture: '',
      icon: <img src={Icon2}/>,
      text: 'Просто проверять гипотезы'
    },
    {
      picture: '',
      icon: <img src={Icon3}/>,
      text: 'Только лучшие практики'
    },
    {
      picture: '',
      icon: <img src={Icon4}/>,
      text: 'Довольные пользователи'
    }
]


    return(
        <ListWrapper1 className="list1-block">

          { listItems.map((li) => {
            return(
              <div className='list1-item'>
                <div className='list1-item__picture'>{li.picture}
                  <div className='list1-item__icon'>{li.icon}</div>
                </div>
                <div className='list1-item__text'>{li.text}</div>
              </div>
            )
          })}
      </ListWrapper1>
    )

}

export default List1;