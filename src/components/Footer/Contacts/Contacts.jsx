import './Contacts.css'

export const Contacts = () => {
    return (
        <section className='contacts' id={'contacts'}>
            <h2 className='contacts-header'>Свяжитесь с нами</h2>

            <ul className='contacts-container'>
                <li className='contacts-item'>
                    <div className='contacts-item-pic phone'></div>
                    <a href="tel:88000000000">
                        <div className='contacts-text'>
                            8 (800) 000 00 00
                        </div></a>
                </li>
                <li className='contacts-item'>
                    <div className='contacts-item-pic email'></div>
                    <a href="mailto: inbox@mail.ru">
                        <div className='contacts-text'>
                            inbox@mail.ru
                        </div>
                    </a>
                </li>
                <li className='contacts-item'>
                    <div className='contacts-item-pic skype'></div>
                    <a href='callto: open Skype'>
                        <div className='contacts-text'>
                            tu.train.tickets
                        </div>
                    </a>
                </li>
                <li className='contacts-item'>
                    <div className='contacts-item-pic adress'></div>
                    <a href='https://maps.app.goo.gl/aAHRPbkS3vcJcbBZ9' rel="noreferrer" target="_blank">
                        <div className='contacts-text'>
                            г. Москва <br />
                            ул. Московская 27-35 <br />
                            555 555
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    )
}
