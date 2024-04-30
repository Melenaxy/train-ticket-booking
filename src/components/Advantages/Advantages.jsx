import './Advantages.css'

export const Advantages = () => {
    return (

        <section className='advantages' id={'advantages'}>
            <div className='advantages-header-container'>
                <h2 className='advantages-header'>Как это работает</h2>
                <button className='learn-more-btn' type='button'>Узнать больше</button>
            </div>

            <ul className='advantages-container'>
                <li className='advantages-item'>
                    <div className='adv-1'></div>
                    <div className='adv-text'>Удобный заказ <br/> на сайте</div>
                </li>
                <li className='advantages-item'>
                    <div className='adv-2'></div>
                    <div className='adv-text'>Нет необходимости ехать в офис</div>
                </li>
                <li className='advantages-item'>
                    <div className='adv-3'></div>
                    <div className='adv-text'>Огромный выбор направлений</div>
                </li>
            </ul>
        </section>
    )
}
