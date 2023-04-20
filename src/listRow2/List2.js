import './List2.css';
import ListWrapper2 from './ListWrapper2';
import Icon1 from '../images/list2_images/icon2.1.svg'
import Icon2 from '../images/list2_images/icon2.2.svg'
import Icon3 from '../images/list2_images/icon2.3.svg'

function List2(props) {

  const  listItems = [
    {
      icon: <img src={Icon1}/>,
      text: 'Витрина диаграмм с подробной документацией и правилами использования.',
      title: 'Всем всем'
    },
    {
      icon: <img src={Icon2}/>,
      text: 'Диаграммы в Figma Community, библиотека и правила использования.',
      title: 'Дизайнерам'
    },
    {
      icon: <img src={Icon3}/>,
      text: 'Библиотека диаграмм в виде NPM-пакета',
      title: 'Разработчикам'
    }
]

    return(
        <ListWrapper2 className="list2-block">

          { listItems.map((li) => {
            return(
              <div className='list2-item'>
                <div className='container1'>
                <div className='list2-item__picture'>
                    <div className='list2-item__icon'>{li.icon}</div>
                  </div>  
                </div>
                  <div className='container2'>
                    <div className='list2-item__title'>{li.title}</div>
                    <div className='list2-item__text'>{li.text}</div>
                  </div>
              </div>
            )
          })}
      </ListWrapper2>
    )
}

export default List2;