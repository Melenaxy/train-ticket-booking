import './Reviews.css'

export const Reviews = () => {
    return (
        <section className='reviews' id={'reviews'}>
            <h2 className='reviews-header'>отзывы</h2>

            <ul className='reviews-container'>
                <li className='reviews-item'>
                    <div className='review-1'></div>
                    <div className='review-text'>
                        <div className='author'>Екатерина Вальнова</div>
                        <div className='text'>&#8220;Доброжелательные подсказки <br />
                            на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые. &#8222;</div>
                    </div>
                </li>
                <li className='reviews-item'>
                    <div className='review-2'></div>
                    <div className='review-text'>
                        <div className='author'>Евгений Стрыкало</div>
                        <div className='text'>&#8220;СМС-сопровождение до посадки <br />
                            Сразу после оплаты ж/д билетов <br />
                            и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке. &#8222;</div>
                    </div>
                </li>
            </ul>

            <div className='slader'></div>
        </section>
    )
}
