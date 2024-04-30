import './TicketsSearchForm.css'

export const TicketsSearchForm = () => {
    return (
        <div className='search-container'>
            <h1>Вся жизнь - <strong>путешествие!</strong></h1>
            <form>
                <label className='direction-label' htmlFor='direction'>Направление</label>
                <div className='direction-container'>
                    <input className='from-direction' type='text' id='direction' placeholder='Откуда'></input>
                    <div className='switch-direction'></div>
                    <input className='to-direction' type='text' placeholder='Куда'></input>
                </div>
                <label className='date-label' htmlFor='date'>Дата</label>
                <div className='date-container'>
                    <input className='from-date' type='date' id='date'></input>
                    <input className='to-date' type='date'></input>
                </div>
                <button className='find-tickets' type='button'>найти билеты</button>
            </form>
        </div>
    )
}
